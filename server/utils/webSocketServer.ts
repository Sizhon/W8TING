import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws) => {
    // When a change happens in the database, you can send an update to the client like this:
    ws.send('Update from the database');
});

export default wss;