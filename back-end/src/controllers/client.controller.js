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

    const client = await Client.findById(id);

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
    const data = req.body;

    const client = await Client.findByIdAndUpdate(id, data, {new: true} )

    return res.status(200).json(client)
  } catch (error) {
    validationError(res, error)
  }
};

export const deleteClient = async (req, res) => {
  try {
    const {id} = req.params;

    const deleteClient = await Client.findByIdAndDelete(id)

    return res.status(200).json(deleteClient)
  } catch (error) {
   validationError(res, error)
  }
};
