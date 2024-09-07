import { Router } from "express";
const endpoints = Router();

import dividirService from "../service/calculadora/dividirService.js";
import somarService from "../service/calculadora/somarService.js";
import multiplicarService from "../service/calculadora/multiplicarService.js";

import { validarSoma } from "../validation/calculadora/somarValidation.js";
import { validarMultiplicacao } from "../validation/calculadora/multiplicarValidation.js";
import { validarDivisao } from "../validation/calculadora/dividirValidation.js";


endpoints.get('/calculadora/somar', (req, resp) => {
    try{
        validarSoma(req)
        
        let n1 = Number(req.query.n1)
        let n2 = Number(req.query.n2)
        let soma = somarService(n1, n2)
    
        resp.send({
            soma: soma
        })
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

});

endpoints.get('/calculadora/multiplicar/:n1/:n2', (req, resp) => {
    try{
        validarMultiplicacao(req)

        let n1 = Number(req.params.n1)
        let n2 = Number(req.params.n2)
        let m = multiplicarService(n1, n2)
    
        resp.send({
            multiplicacao: m
        })
    }

    catch(err) {
        resp.status(400).status({
            erro: err.message
        })
    }
})

endpoints.post('/calculadora/dividir', (req, resp) => {
    try{
        validarDivisao(req)
            
        let n1 = Number(req.body.n1)
        let n2 = Number(req.body.n2)
    
        let r = dividirService(n1, n2)
    
        resp.send({
            resultado: r
        })
    }
    
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
