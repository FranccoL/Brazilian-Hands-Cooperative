import { Router } from "express";
import { connectDB } from "../configDB/connectDB.js";
import {
  createCollaborator,
  getAllCollaborator,
  getCollaboratorId,
  removeCollaborator,
  updateCollabarator,
} from "../controllers/collaborator.controller.js";

export const routerCollaborator = Router();

routerCollaborator.get("/collaborator", connectDB, getAllCollaborator);
routerCollaborator.get("/collaborator/:id", connectDB, getCollaboratorId);
routerCollaborator.post("/collaborator", connectDB, createCollaborator);
routerCollaborator.put("/collaborator/:id", connectDB, updateCollabarator);
routerCollaborator.delete("/collaborator/:id", connectDB, removeCollaborator);
