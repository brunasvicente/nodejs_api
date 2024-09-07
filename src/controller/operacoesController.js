import { Router } from "express";
const endpoints = Router();

import mediaService from "../service/operacoes/mediaService.js";
import dobroService from "../service/operacoes/dobroService.js";


endpoints.post('/media', (req, resp) => {
    let n1 = Number(req.body.nota1)
    let n2 = Number(req.body.nota2)
    let n3 = Number(req.body.nota3)

    let m = mediaService(n1, n2, n3)

    resp.send({
        media: m
    })
});

endpoints.post('/dobro', (req, resp) => {
    let nums = req.body.numeros
    let d = dobroService(nums)

    resp.send({
        dobro: d
    })
});

export default endpoints;
