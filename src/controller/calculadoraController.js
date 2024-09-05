import { Router } from "express";
const endpoints = Router();

endpoints.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let soma = n1 + n2
    resp.send(`${n1} + ${n2} = ${soma}`)
});


endpoints.get('calculadora/multiplicar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let m = n1 * n2

    resp.send({
        resultado: m
    })
})

endpoints.get('calculadora/dividir', (req, resp) => {
    let n1 = Number(req.body.n1)
    let n2 = Number(req.body.n2)
    let d = n1 / n2

    resp.send({
        resultado: d
    })
})

export default endpoints;
