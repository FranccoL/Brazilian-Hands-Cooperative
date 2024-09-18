import express from "express"; // 
import cors from "cors";

const app = express();  
const PORT = 3000


app.use(cors())
app.use(express.json())


app.get('/', (_, res)=>{
    return res.send('Hello Brazilian')
})


app.listen(PORT, ()=>{
    console.log(`Rodando na port ${PORT}`)
})

/**
 * Inicio básico do projeto
 * 
 * * npm init -y 
 * * npm install express --save
 * * npm i swagger-autogen swagger-ui-express mongoose mongoose-to-swagger cors dotenv
 * * install nodemon --save-dev
 * 
 * *****  no packege.js
 * 
 *  *  "type":"module",  colocado para poder usar import ao inves de require
 * 
 *  para rodar o projeto npm run dev
 * 
 */