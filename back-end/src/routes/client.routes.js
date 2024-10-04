import { Router } from "express";
import { connectDB } from "../configDB/connectDB.js";
import {
  createClient,
  deleteClient,
  getAllClient,
  getClientById,
  updateClient,
} from "../controllers/client.controller.js";
import { acessAuth } from "../middleware/acessAuth.js";

export const routerClient = Router();

routerClient.get("/client", acessAuth, connectDB, getAllClient);
routerClient.get("/client/:id", acessAuth, connectDB, getClientById);
routerClient.post("/client", connectDB, createClient);
routerClient.put("/client/:id", acessAuth ,connectDB, updateClient);
routerClient.delete("/client/:id",acessAuth ,connectDB, deleteClient);


//rotas para teste sem auth
// routerClient.get("/client", connectDB, getAllClient);
// routerClient.get("/client/:id", connectDB, getClientById);
// routerClient.post("/client", createClient);
// routerClient.put("/client/:id", connectDB, updateClient);
// routerClient.delete("/client/:id",connectDB, deleteClient);


