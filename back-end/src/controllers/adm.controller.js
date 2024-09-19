import Adm from "../models/adm.model.js";
import { crypt } from "../utils/bcryptFunctions.js";
import { validationError } from "../validatorError/validationError.js";

export const getAdm = async (_, res) => {
  try {
    const adm = await Adm.find();

    return res.status(200).json(adm);
  } catch (error) {
    validationError(res, error);
  }
};

export const getByIdAdm = async (req, res) => {
  try {
    const { id } = req.params;

    const adm = await Adm.findById(id);

    return res.status(200).json(adm);
  } catch (error) {
    validationError(res, error);
  }
};

export const createAdm = async (req, res) => {
  try {
    const { password, ...body } = req.body;

    let cryptPass;

    if (password) {
      cryptPass = await crypt(password);
    }

    const data = {
      ...req.body,
      password: cryptPass,
    };

    const adm = await Adm.create(data);

    return res.status(200).json(adm);
  } catch (error) {
    validationError(res, error);
  }
};

export const updateAdm = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (data.password) {
      const cryptPass = await crypt(data.password);

      data.password = cryptPass;
    }

    const adm = await Adm.findByIdAndUpdate(id, data, { new: true });

    return res.status(200).json(adm);
  } catch (error) {
    validationError(res, error);
  }
};

export const removeAdm = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAdm = await Adm.findByIdAndDelete(id);

    return res.status(200).json(deleteAdm);
  } catch (error) {
    validationError(res, error);
  }
};
