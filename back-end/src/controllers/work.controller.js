import mongoose from "mongoose";
import Works from "../models/admWork.model.js";
import Client from "../models/client.model.js";
import Collaborator from "../models/collaborator.model.js";
import { validationError } from "../validatorError/validationError.js";
import { isValid } from "date-fns";

export const getAllWorks = async (_, res) => {
  //#swagger.tags=['Works']
  try {
    const works = await Works.find()
      .populate("client")
      .populate("collaborator");

    return res.status(200).json(works);
  } catch (error) {
    validationError(res, error);
  }
};

export const getWorkByDay = async (req, res) => {
   //#swagger.tags=['Works']
  try {
    const { date } = req.query; //query parameter, ex: ?date=2024-09-26

    if (!date || isValid(new Date(date))) {
      return res.status(400).json({ message: "Data inválida." });
    }

    //date.setHours(hours, minutes, seconds, milliseconds);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const works = await Works.find({
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    })
      .populate("Client")
      .populate("collaborator");

    return res.status(200).json(works);
  } catch (error) {
    validationError(res, error);
  }
};

export const getWorkByMonth = async (req, res) => {
   //#swagger.tags=['Works']
  try {
    const { month, year } = req.query; //query parameters, ex: ?year=2024&month=9

    if (!month || !year || isNaN(month) || isNaN(year)) {
      return res.status(400).json({ message: "Parâmetros de data inválidos" });
    }

    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    const works = await Works.find({
      date: {
        $gte: startOfMonth,
        $lte: endOfMonth,
      },
    })
      .populate("Client")
      .populate("Collaborator");

    return res.status(200).json(works);
  } catch (error) {
    validationError(res, error);
  }
};

export const createWork = async (req, res) => {
   //#swagger.tags=['Works']
  try {
    const { client, collaborator, work, price, date, status } = req.body;

    const isValidClient = await Client.find({ name: client });

    if (!isValidClient) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    const isValidCollaborator = await Collaborator.find({ name: collaborator });

    if (!isValidCollaborator) {
      return res.status(404).json({ message: "Colaborador não encontrado" });
    }

    const newWork = await Works.create({
      client: isValidClient[0]._id,
      collaborator: isValidCollaborator[0]._id,
      work,
      price,
      date,
      status,
    });

    return res.status(201).json(newWork);
  } catch (error) {
    validationError(res, error);
  }
};

export const updateWork = async (req, res) => {
   //#swagger.tags=['Works']
  try {
    const { id } = req.params;
    const { client, collaborator, ...updates } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    if (client) {
      return res.status(400).json({ message: "Cliente não pode ser alterado" });
    }

    if (collaborator) {
      const isValidCollaborator = await Collaborator.find({
        name: collaborator,
      });

      if (!isValidCollaborator.length) {
        return res.status(400).json({ message: "Colaborador não encontrado" });
      }

      const updatesWork = await Works.findByIdAndUpdate(
        id,
        {
          collaborator: isValidCollaborator[0]._id,
          ...updates,
        },
        {
          new: true,
        }
      );

      return res.status(200).json(updatesWork);
    }

    const updateWork = await Works.findByIdAndUpdate(id, updates, {
      new: true,
    });

    return res.status(200).json(updateWork);
  } catch (error) {
    validationError(res, error);
  }
};
