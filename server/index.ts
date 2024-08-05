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
export default app;