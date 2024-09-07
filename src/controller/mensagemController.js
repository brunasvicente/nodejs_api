import { Router } from "express";
const endpoints = Router();

import { validarBoasVindas } from "../validation/mensagem/boasvindasValidation.js";


endpoints.get('/helloworld', (req, resp) => {
    resp.send('Hello World')
});

endpoints.get('/mensagem/boasvindas/:nome', (req, resp) => {
    try{
        validarBoasVindas(req)
            
        let nome = req.params.nome
        resp.send(`Olá, seja bem-vindo(a) ${nome}!!!`)
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default endpoints;
