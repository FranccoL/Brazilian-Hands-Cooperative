import { Router } from "express";
import { connectDB } from "../configDB/connectDB.js";
import {
  createClient,
  deleteClient,
  getAllClient,
  getClientById,
  updateClient,
} from "../controllers/client.controller.js";

export const routerClient = Router();

routerClient.get("/client", connectDB, getAllClient);
routerClient.get("/client/:id", connectDB, getClientById);
routerClient.post("/client", connectDB, createClient);
routerClient.put("/client/:id", connectDB, updateClient);
routerClient.delete("/client/:id", connectDB, deleteClient);
