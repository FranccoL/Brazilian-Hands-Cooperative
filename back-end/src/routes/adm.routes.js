import { Router } from "express";
import { connectDB } from "../configDB/connectDB.js";
import { createAdm, getAdm, getByIdAdm, removeAdm, updateAdm } from "../controllers/adm.controller.js";


export const routerAdm = Router() 

routerAdm.get('/adm', connectDB, getAdm)
routerAdm.get('/adm/:id', connectDB, getByIdAdm)
routerAdm.post('/adm', connectDB, createAdm)
routerAdm.put('/adm/:id', connectDB, updateAdm)
routerAdm.delete('/adm/:id', connectDB, removeAdm )