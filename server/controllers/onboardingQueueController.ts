import { NextFunction, Request, Response } from 'express';
import supabase from "../utils/supabase";
import numberAssignmentGenerator from "../utils/numberAssignmentGenerator";
import wss from "../utils/webSocketServer";
import WebSocket from "ws";

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
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('Added someone to the queue');
        }
    });
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
}