import mongoose from "mongoose";
import Collaborator from "../models/collaborator.model.js";
import { validationError } from "../validatorError/validationError.js";

export const getAllCollaborator = async (_, res) => {
   //#swagger.tags=['Collaborator']
  try {
    let client = await Collaborator.find();
    return res.status(200).json(client);
  } catch (error) {
    validationError(res, error);
  }
};

export const getCollaboratorId = async (req, res) => {
   //#swagger.tags=['Collaborator']
  try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ message: "ID inválido" });
    }

    const collaborator = await Collaborator.findById(id);

    if(!collaborator){
      return res.status(404).json({ message: "Colaborador não encontrado" });
    }

    return res.status(200).json(collaborator);
  } catch (error) {
    validationError(res, error);
  }
};

export const createCollaborator = async (req, res) => {
   //#swagger.tags=['Collaborator']
  try {
    const data = req.body;

    const collaborator = await Collaborator.create(data);

    return res.status(200).json(collaborator);
  } catch (error) {
    validationError(res, error);
  }
};

export const updateCollabarator = async (req, res) => {
   //#swagger.tags=['Collaborator']
  try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ message: "ID inválido" });
    }

    const data = req.body;

    const collaborator = await Collaborator.findByIdAndUpdate(id, data, {
      new: true,
    });

    if(!collaborator){
      return res.status(404).json({ message: "Colaborador não encontrado" });
    }

    return res.status(200).json(collaborator);
  } catch (error) {
    validationError(res, error);
  }
};

export const removeCollaborator = async (req, res) => {
   //#swagger.tags=['Collaborator']
  try {
    const { id } = req.params;
   
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ message: "ID inválido" });
    }

    const deleteCollaborator = await Collaborator.findByIdAndDelete(id);

    
    if(!deleteCollaborator){
      return res.status(404).json({ message: "Colaborador não encontrado" });
    }

    return res.status(200).json(deleteCollaborator);
  } catch (error) {
    validationError(res, error);
  }
};
