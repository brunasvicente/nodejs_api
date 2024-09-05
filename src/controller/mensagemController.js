import { Router } from "express";
const endpoints = Router();

endpoints.get('/helloworld', (req, resp) => {
    resp.send('Hello World')
});

endpoints.get('/mensagem/boasvindas/:nome', (req, resp) => {
    let nome = req.params.nome
    resp.send(`Olá, seja bem-vindo(a) ${nome}!!!`)
});

export default endpoints;
