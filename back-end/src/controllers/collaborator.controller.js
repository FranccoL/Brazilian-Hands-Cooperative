import Collaborator from "../models/collaborator.model.js";
import { validationError } from "../validatorError/validationError.js";

export const getAllCollaborator = async (_, res) => {
  try {
    let client = await Collaborator.find();
    return res.status(200).json(client);
  } catch (error) {
    validationError(res, error);
  }
};

export const getCollaboratorId = async (req, res) => {
  try {
    const { id } = req.params;

    const collaborator = await Collaborator.findById(id);

    return res.status(200).json(collaborator);
  } catch (error) {
    validationError(res, error);
  }
};

export const createCollaborator = async (req, res) => {
  try {
    const data = req.body;

    const collaborator = await Collaborator.create(data);

    return res.status(200).json(collaborator);
  } catch (error) {
    validationError(res, error);
  }
};

export const updateCollabarator = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const collaborator = await Collaborator.findByIdAndUpdate(id, data, {
      new: true,
    });

    return res.status(200).json(collaborator);
  } catch (error) {
    validationError(res, error);
  }
};

export const removeCollaborator = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCollaborator = await Collaborator.findByIdAndDelete(id);

    return res.status(200).json(deleteCollaborator);
  } catch (error) {
    validationError(res, error);
  }
};
