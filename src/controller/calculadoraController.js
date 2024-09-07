import { Router } from "express";
const endpoints = Router();

import dividirService from "../service/calculadora/dividirService.js";
import somarService from "../service/calculadora/somarService.js";
import multiplicarService from "../service/calculadora/multiplicarService.js";


endpoints.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let soma = somarService(n1, n2)

    resp.send({
        soma: soma
    })
});

endpoints.get('/calculadora/multiplicar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let m = multiplicarService(n1, n2)

    resp.send({
        multiplicacao: m
    })
})

endpoints.post('/calculadora/dividir', (req, resp) => {
    let n1 = Number(req.body.n1)
    let n2 = Number(req.body.n2)

    let r = dividirService(n1, n2)

    resp.send({
        resultado: r
    })
})

export default endpoints;
