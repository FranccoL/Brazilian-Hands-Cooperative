import mongoose from "mongoose";
import Client from "../models/client.model.js";
import { validationError } from "../validatorError/validationError.js";

export const getAllClient = async (_, res) => {
  try {
    const clients = await Client.find();

    return res.status(200).json(clients);
  } catch (error) {
    validationError(res, error)
  }
};

export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ message: "ID inválido" });
    }

    const client = await Client.findById(id);

    if(!client){
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.status(200).json(client);
  } catch (error) {
    validationError(res, error)
  }
};

export const createClient = async (req, res) => {
  try {
    const data = req.body;

    const client = await Client.create(data);

    return res.status(200).json(client);
  } catch (error) {
    validationError(res, error)
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ message: "ID inválido" });
    }

    const data = req.body;

    const client = await Client.findByIdAndUpdate(id, data, {new: true} )

    if(!client){
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.status(200).json(client)
  } catch (error) {
    validationError(res, error)
  }
};

export const deleteClient = async (req, res) => {
  try {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ message: "ID inválido" });
    }

    const deleteClient = await Client.findByIdAndDelete(id)

    if(!deleteClient){
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.status(200).json(deleteClient)
  } catch (error) {
   validationError(res, error)
  }
};
