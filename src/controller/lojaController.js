import { Router } from "express";
const endpoints = Router();

import pedidoService from "../service/loja/pedidoService.js";
import { calcularTotal, valorParcela } from "../service/loja/pedidoCompletoService.js";

import { validarPedido } from "../validation/loja/pedidoValidation.js";
import { validarPedidoCompleto } from "../validation/loja/completoValidation.js";


endpoints.post('/loja/pedido', (req, resp) => {
    try{
        validarPedido(req)
        
        let total = req.body.total
        let parcelas = req.body.parcelas
        let cupom = req.query.cupom
        
        let t = pedidoService(total, parcelas, cupom)
        
        resp.send({
            total: t
        })
    }

    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.post('/loja/pedido/completo', (req, resp) => {
    try{
        validarPedidoCompleto(req)

        let parcelas = req.body.parcelas
        let itens = req.body.itens
        let cupom = req.query.cupom
    
        let total = calcularTotal(parcelas, itens, cupom)
        let valor = valorParcela(total, parcelas)
        
        resp.send({
            total: total,
            qtdParcelas: parcelas,
            valorParcela: valor
        })
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default endpoints;
