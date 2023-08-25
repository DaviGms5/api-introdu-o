import dotenv from "dotenv";
import express from "express";

const port = 3000;
dotenv.config();

app.use(express.json());

app.listen(port, () => {
  // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});


