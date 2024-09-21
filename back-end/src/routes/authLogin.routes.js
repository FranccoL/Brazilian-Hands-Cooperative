import {Router} from 'express';
import { authLogin, validationToken } from '../controllers/authLogin.js';
import { connectDB } from '../configDB/connectDB.js';

export const routerLogin = Router()

routerLogin.post('/admLogin',connectDB, authLogin)
routerLogin.post('/admToken',connectDB, validationToken)