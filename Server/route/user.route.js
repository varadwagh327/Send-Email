import express,{ Router } from 'express';
import {EmailUserController} from '../controllers/user.controller.js';

const userRouter = Router()

userRouter.post('/email', EmailUserController)

export default userRouter;
