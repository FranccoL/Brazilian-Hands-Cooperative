import Adm from "../models/adm.model.js";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";

export const authLogin = async (req, res) => {
  try {
    const { email } = req.body;

    let adm = await Adm.findOne({ email });

    if (!adm) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }
    // Gera um token hexadecimal de 6 caracteres
    const token = crypto.randomBytes(3).toString('hex')

    // Definir o tempo de expiração do token (por exemplo, 10 minutos)
    const tokenExpires = Date.now() + 10 * 60 * 1000;

    // Atualizar o usuário com o token e a expiração
    adm.token = token;
    adm.tokenExpires = tokenExpires;

    await adm.save();

    await sendEmail(email, token);

    res.status(200).json({ message: "Token enviado para o seu e-mail" });
  } catch (error) {
    validationError(res, error);
  }
};

export const validationToken = async (req, res) => {
  try {
    const adm = await Adm.findOne({ email });

    if (!adm) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    // Verificar se o token está correto e ainda é válido
    if (adm.token !== token || DataTransfer.now() > adm.tokenExpires) {
      return res.status(400).json({ message: "Token inválido ou expirado" });
    }

    // Se tudo estiver correto, o login é bem-sucedido
    res.status(200).json({ message: 'Login bem-sucedido!' });

  } catch (error) {
    validationError(res, error);
  }
};








// import jwt from "jsonwebtoken";
// import { compareCrypt } from "../utils/bcryptFunctions.js";
// export const authLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email) {
//       throw new Error("E-mail é obrigatório");
//     }

//     if (!password) {
//       throw new Error("Senha é obrigatória");
//     }

//     const responseDB = await Adm.findOne({ email }).select("+password");

//     if (!responseDB) {
//       throw new Error("Senha ou password inválido.");
//     }

//     console.log(password)
//     console.log(responseDB.password)

//     const isValidPass = await compareCrypt(password, responseDB.password);
//      console.log(isValidPass);

//     if (!isValidPass) {
//       throw new Error("Senha ou password inválido.");
//     }

//     let token;

//     if (isValidPass) {
//       token = jwt.sign({ id: responseDB._id }, process.env.JWT_SECRET, {
//         expiresIn: "1d",
//       });
//     }

//     res.status(200).json(token)

//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: error.message });
//   }
// };
