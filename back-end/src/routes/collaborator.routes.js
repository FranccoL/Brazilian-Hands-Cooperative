import { Router } from "express";
import { connectDB } from "../configDB/connectDB.js";
import {
  createCollaborator,
  getAllCollaborator,
  getCollaboratorId,
  getCollaboratorsByWork,
  removeCollaborator,
  updateCollabarator,
} from "../controllers/collaborator.controller.js";
import { acessAuth } from "../middleware/acessAuth.js";

export const routerCollaborator = Router();


// routerCollaborator.get("/collaborator",acessAuth ,connectDB, getAllCollaborator);
// routerCollaborator.get("/collaborator/:id", acessAuth,connectDB, getCollaboratorId);
// routerCollaborator.post("/collaborator", connectDB, createCollaborator);
// routerCollaborator.put("/collaborator/:id",acessAuth ,connectDB, updateCollabarator);
// routerCollaborator.delete("/collaborator/:id",acessAuth,connectDB, removeCollaborator);

//rotas para teste sem auth
routerCollaborator.get("/collaborator",connectDB, getAllCollaborator);
routerCollaborator.get("/collaborator/:id", connectDB, getCollaboratorId);
routerCollaborator.get("/collaborators/:work", getCollaboratorsByWork);
routerCollaborator.post("/collaborator", createCollaborator);
routerCollaborator.put("/collaborator/:id", connectDB, updateCollabarator);
routerCollaborator.delete("/collaborator/:id",connectDB, removeCollaborator);



