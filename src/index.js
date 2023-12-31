import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.use(roteadorLogin);
app.use(roteadorUsuario);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Davi Gomes Mendes",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

