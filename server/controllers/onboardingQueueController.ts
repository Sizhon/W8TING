import { NextFunction, Request, Response } from 'express';
import supabase from "../utils/supabase";
import numberAssignmentGenerator from "../utils/numberAssignmentGenerator";
import wss from "../utils/webSocketServer";
import WebSocket from "ws";

const updateTableForClients = async () => {
    const table = await getOnboardingQueue();
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                message: "Update from the database",
                data: table,
            }));
        }
    });
}

export const addToQueue = async ( req: Request, res: Response, next: NextFunction ) => {
    const { name, email, phone_number } = req.body;
    const insertRes = await supabase
        .from('Onboarding')
        .insert([
            {
                assigned_number: await numberAssignmentGenerator(),
                name: name,
                email: email !== undefined ? email : "",
                phone_number: phone_number !== undefined ? email : "",
                status: "WAITING",
            },
        ])
        .select();
    if (insertRes.error) {
        res.status(500).json({ message: insertRes.error });
        return;
    }
    res.status(200).json({ message: "Added to queue", data: insertRes });
    await updateTableForClients();
}

export const removeFromQueue = async ( req: Request, res: Response, next: NextFunction ) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const { assigned_number } = req.body;
    const deleteRes = await supabase
        .from('Onboarding')
        .delete()
        .eq('assigned_number', assigned_number)
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
    await updateTableForClients();
}

const getOnboardingQueue = async () => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const table = await supabase
        .from("Onboarding").select("*", {count: "exact"})
        .gte("created_at", startOfDay.toISOString())
    return table.data ? table.data : [];
}

export const getQueue = async ( req: Request, res: Response, next: NextFunction ) => {
    const table = await getOnboardingQueue();
    res.status(200).json({ message: "Queue data", data: table });
}