import {Router} from 'express';
import { authLogin } from '../controllers/authLogin.js';
import { connectDB } from '../configDB/connectDB.js';

export const routerLogin = Router()

routerLogin.post('/admLogin',connectDB, authLogin)