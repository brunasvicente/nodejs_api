import { Router } from "express";
const endpoints = Router();

import mediaService from "../service/operacoes/mediaService.js";
import dobroService from "../service/operacoes/dobroService.js";

import { validarMedia } from "../validation/operacoes/mediaValidation.js";
import { validarDobro } from "../validation/operacoes/dobroValidation.js";


endpoints.post('/media', (req, resp) => {
    try{
        validarMedia(req)

        let n1 = Number(req.body.nota1)
        let n2 = Number(req.body.nota2)
        let n3 = Number(req.body.nota3)
    
        let m = mediaService(n1, n2, n3)
    
        resp.send({
            media: m
        })
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.post('/dobro', (req, resp) => {
    try{
        validarDobro(req)
        
        let nums = req.body.numeros
        let d = dobroService(nums)
    
        resp.send({
            dobro: d
        })
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default endpoints;
