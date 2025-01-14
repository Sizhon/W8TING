import { NextFunction, Request, Response } from "express";
import supabase from "../utils/supabase";
import numberAssignmentGenerator from "../utils/numberAssignmentGenerator";
import wss from "../utils/webSocketServer";
import { WebSocket } from "ws";
import { updateUsed } from "../utils/numberAssignmentGenerator";

const getOnboardingQueue = async () => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const table = await supabase
    .from("Onboarding")
    .select("*", { count: "exact" })
    .gte("created_at", startOfDay.toISOString());
  return table.data ? table.data : [];
};

const channels = supabase
  .channel("custom-all-channel")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "Onboarding" },
    async (payload) => {
      // React to different events
      switch (payload.eventType) {
        case "INSERT":
          await updateTableForClients();
          break;
        case "UPDATE":
          await updateTableForClients();
          break;
        case "DELETE":
          await updateTableForClients();
          break;
        default:
          console.log("Unhandled event type:", payload);
      }
    }
  )
  .subscribe();

const updateTableForClients = async () => {
  const table = await getOnboardingQueue();
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          message: "Update from the database",
          data: table,
        })
      );
    }
  });
};

export const addToQueue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phone_number, purpose } = req.body;
  const assigned_number = await numberAssignmentGenerator();
  const insertRes = await supabase
    .from("Onboarding")
    .insert([
      {
        assigned_number,
        name: name,
        email: email !== undefined ? email : "",
        phone_number: phone_number !== undefined ? phone_number : "",
        purpose,
        status: "WAITING",
      },
    ])
    .select();
  if (insertRes.error) {
    res.status(500).json({ message: insertRes.error });
    return;
  }
  res.status(200).json({ message: "Added to queue", assigned_number });
  updateUsed(insertRes.data[0].assigned_number, true);
};

export const removeFromQueueByAssignedNumber = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const { assigned_number } = req.body;
  const deleteRes = await supabase
    .from("Onboarding")
    .delete()
    .eq("assigned_number", assigned_number)
    .gte("created_at", startOfDay.toISOString())
    .select();
  if (deleteRes.error) {
    res.status(500).json({ message: deleteRes.error });
    return;
  }
  if (deleteRes.data.length === 0) {
    res.status(404).json({ message: "No entry found" });
    return;
  }
  res.status(200).json({ message: "Removed from queue", data: deleteRes });
  updateUsed(assigned_number, false);
};

export const removeFromQueueByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const { id } = req.params;
  const deleteRes = await supabase
    .from("Onboarding")
    .delete()
    .eq("id", id)
    .gte("created_at", startOfDay.toISOString())
    .select();
  if (deleteRes.error) {
    res.status(500).json({ message: deleteRes.error });
    return;
  }
  if (deleteRes.data.length === 0) {
    res.status(404).json({ message: "No entry found" });
    return;
  }

  res.status(200).json({ message: "Removed from queue", data: deleteRes });
  updateUsed(deleteRes.data[0].assigned_number, false);
};

export const getQueue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const table = await getOnboardingQueue();
  res.status(200).json({ message: "Queue data", data: table });
};

export const getQueueByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const table = await supabase.from("Onboarding").select("*").eq("id", id);
  if (table.error) {
    res.status(500).json({ message: table.error });
    return;
  }
  res.status(200).json({ message: "Queue data", data: table.data });
};

export const updateQueue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const { assigned_number, name, status, email, phone_number, staff, purpose } =
    req.body;
  const table = await supabase
    .from("Onboarding")
    .update({
      name: name ? name : "",
      status: status ? status : "",
      email: email ? email : "",
      phone_number: phone_number ? phone_number : "",
      staff: staff ? staff : "",
      purpose: purpose ? purpose : "",
    })
    .eq("assigned_number", assigned_number)
    .gte("created_at", startOfDay.toISOString())
    .select();

  if (table.error) {
    res.status(500).json({ message: table.error });
    return;
  }
  if (table.data.length === 0) {
    res.status(404).json({ message: "No entry found or updated" });
    return;
  }
  res.status(200).json({ message: "Updated queue", data: table });
};

export const updateQueueByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, status, email, phone_number, staff, purpose } = req.body;

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const table = await supabase
    .from("Onboarding")
    .update({
      name: name ? name : "",
      status: status ? status : "",
      email: email ? email : "",
      phone_number: phone_number ? phone_number : "",
      staff: staff ? staff : "",
      purpose: purpose ? purpose : "",
    })
    .eq("id", id)
    .gte("created_at", startOfDay.toISOString())
    .select();

  if (table.error) {
    res.status(500).json({ message: table.error });
    return;
  }
  if (table.data.length === 0) {
    res.status(404).json({ message: "No entry found or updated" });
    return;
  }
  res.status(200).json({ message: "Updated queue", data: table });
};
