import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware para CORS e JSON
app.use(cors());
app.use(express.json());

// Rota básica para teste
app.get("/", (_, res) => {
  return res.send("Hello Brazilian");
});

// Se a conexão for bem-sucedida, inicia o servidor
app.listen(process.env.PORT, () => {
  console.log(`Conectado ao banco de dados.`);
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

/**
 * TESTE PARA VER SE BANCO ESTA CONECTANDO:
 * import { connectDB } from "./src/configDB/connectDB.js";
 * 
 * 
 * const startServer = async () => {
 *  try {
 *      // Tenta conectar ao banco de dados
 *     await connectDB();
 *
 *    // Se a conexão for bem-sucedida, inicia o servidor
 *    app.listen(process.env.PORT, () => {
 *       console.log(`Conectado ao banco de dados.`);
 *       console.log(`Servidor rodando na porta ${process.env.PORT}`);
 *  });
 * } catch (error) {
 *    console.error("Erro ao iniciar o servidor:", error);
 *}
 *};
 *
 * Chama a função para iniciar o servidor
 *startServer();
 *
 */
