import express from "express";
import {
    addToQueue,
    getQueue,
    getQueueByID,
    removeFromQueueByAssignedNumber, removeFromQueueByID, updateQueue, updateQueueByID
} from "../controllers/onboardingQueueController";
import {checkAssignedNumberFields, checkNameFields} from "../utils/validators";

const queueRouter = express.Router();

queueRouter
    .route('/onboarding')
    .get(getQueue)
    .post(checkNameFields, addToQueue)
    .patch(updateQueue)//via assigned number
    .delete(checkAssignedNumberFields, removeFromQueueByAssignedNumber);

queueRouter
    .route('/onboarding/:id')
    .get(getQueueByID)
    .patch(updateQueueByID)
    .delete(removeFromQueueByID);

queueRouter
    .route('/anythingelseplaceholder')
    .get()
    .post()
    .patch()
    .delete();


export default queueRouter;