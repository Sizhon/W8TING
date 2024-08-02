import express from "express";
import {addToQueue, removeFromQueue} from "../controllers/onboardingQueueController";
import {checkAssignedNumberFields, checkNameFields} from "../utils/validators";

const queueRouter = express.Router();

queueRouter
    .route('/onboarding')
    .get()
    .post(checkNameFields, addToQueue)
    .patch()
    .delete(checkAssignedNumberFields, removeFromQueue);

queueRouter
    .route('/anythingelseplaceholder')
    .get()
    .post()
    .patch()
    .delete();


export default queueRouter;