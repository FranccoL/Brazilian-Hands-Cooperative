import mongoose from "mongoose";

export const connectDB = async (req = null, res = null, next = null) => {
  if (mongoose.connect.readyState === 1) {
    if (typeof next === "function") {
      next();
    }
    return mongoose;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado ao banco de dados");

    if (typeof next === "function") {
      next();
    }

    return mongoose;
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao conectar ao banco de dados" });
  }
};
