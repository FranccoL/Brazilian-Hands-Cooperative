import { Router } from "express";
import { createWork, getAllWorks, getWorkByDay, getWorkByMonth, updateWork } from "../controllers/work.controller.js";
import { connectDB } from "../configDB/connectDB.js";


export const workRouter = Router()

workRouter.get('/work', connectDB ,getAllWorks )
workRouter.get('/work/search', connectDB, getWorkByDay )
workRouter.get('/work/search', connectDB, getWorkByMonth )
workRouter.post('/work', connectDB, createWork )
workRouter.put('/work/:id', connectDB, updateWork)