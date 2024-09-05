import { Router } from "express";
const endpoints = Router();

endpoints.post('/loja/pedido', (req, resp) => {
    let total = req.body.total
    let parcelas = req.body.parcelas
    let cupom = req.query.cupom
    
    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    } if (cupom == 100) {
        total -= 100
    }

    resp.send(`Total: R$ ${total.toFixed(2)}`)
});

endpoints.post('/loja/pedido/completo', (req, resp) => {
    let parcelas = req.body.parcelas
    let itens = req.body.itens
    let cupom = req.query.cupom

    let total = 0
    for (let produto of itens) {
        total += produto.preco
    }

    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    } if (cupom == 100) {
        total -= 100 
    }
    
    resp.send(`O total é R$ ${total.toFixed(2)}`)
});

export default endpoints;
