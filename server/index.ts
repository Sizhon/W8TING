import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import queueRouter from "./routes/queueRoutes";
import wss from "./utils/webSocketServer";

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/queues/', queueRouter);
const server = http.createServer(app);
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server Port: ${PORT}`));

app.get('/test', (req, res) => {
    // Handle API request, update database, etc.

    // Then broadcast the update to all connected clients
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('Update from the database');
        }
    });

    res.send('OK');
});