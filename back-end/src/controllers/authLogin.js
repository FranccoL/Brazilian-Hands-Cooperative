import Adm from "../models/adm.model.js";
export const authLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email) {
      throw new Error("E-mail é obrigatório");
    }

    if (!password) {
      throw new Error("Senha é obrigatória");
    }

    const responseDB = await Adm.findOne({email}).select("+password")

    if(!responseDB){
        throw new Error("Senha ou password inválido.")
    }

    const isValidPass = await(compareCrypt(password, responseDB.password))


    
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
