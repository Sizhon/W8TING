import { WebSocketServer } from 'ws'
import http from "http";
import app from "../index";

const wss = new WebSocketServer({ noServer: true });
const server = http.createServer(app);
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

const PORT = process.env.PORT || 3000;

wss.on('connection', (ws) => {
    // When a change happens in the database, you can send an update to the client like this:
    ws.send('Websocket connection established');
});

export default wss;

server.listen(PORT, () => console.log(`Server Port: ${PORT}`));