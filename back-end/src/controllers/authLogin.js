import Adm from "../models/adm.model.js";
import jwt from "jsonwebtoken";
import { compareCrypt } from "../utils/bcryptFunctions.js";

export const authLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email) {
      throw new Error("E-mail é obrigatório");
    }

    if (!password) {
      throw new Error("Senha é obrigatória");
    }

    const responseDB = await Adm.findOne({ email }).select("+password");

    if (!responseDB) {
      throw new Error("Senha ou password inválido.");
    }

    console.log(password)
    console.log(responseDB.password)

    const isValidPass = await compareCrypt(password, responseDB.password);
     console.log(isValidPass);

    if (!isValidPass) {
      throw new Error("Senha ou password inválido.");
    }

    let token;

    if (isValidPass) {
      token = jwt.sign({ id: responseDB._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
    }
    
    res.status(200).json(token)
   
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
