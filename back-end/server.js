import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import dotenv from "dotenv";
import bearerToken from 'express-bearer-token';

import { routerCollaborator } from "./src/routes/collaborator.routes.js";
import { routerAdm } from "./src/routes/adm.routes.js";
import { routerClient } from "./src/routes/client.routes.js";
import { routerLogin } from "./src/routes/authLogin.routes.js";
import { workRouter } from "./src/routes/works.routes.js";

//import doc
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();

// CORS e JSON   
app.use(cors());
app.use(bearerToken());
app.use(express.json());

// Configuração do body-parser
app.use(bodyParser.json()); // Para interpretar JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para interpretar URL-encoded

// // Rota básica para teste
// app.get("/", (_, res) => {
//   return res.send("Hello Brazilian");
// });


//routes Adm
app.use('/', routerAdm)

//routes client
app.use('/', routerClient)

//routes Collaborator
app.use('/', routerCollaborator)

//login
app.use('/', routerLogin)

//work
app.use('/', workRouter)

//doc

if(process.env.NODE_ENV !== "test"){
  const swaggerFile = await import("./swagger/swagger_output.json", {assert: {type: 'json'}})
  app.get('/', (_, res) => { /*#swagger.ignore = true*/ res.redirect('/doc'); });
  app.use('/doc'/*, authDocProducao*/, swaggerUi.serve, swaggerUi.setup(swaggerFile.default)); // Acesse o conteúdo padrão do JSON
}


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
