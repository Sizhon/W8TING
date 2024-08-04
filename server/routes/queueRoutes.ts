import express from "express";
import {
    addToQueue,
    getQueue,
    getQueueByUUID,
    removeFromQueueByAssignedNumber, removeFromQueueByUUID, updateQueue, updateQueueByUUID
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
    .route('/onboarding/:uuid')
    .get(getQueueByUUID)
    .patch(updateQueueByUUID)
    .delete(removeFromQueueByUUID);

queueRouter
    .route('/anythingelseplaceholder')
    .get()
    .post()
    .patch()
    .delete();


export default queueRouter;