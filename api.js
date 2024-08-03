import express from 'express';
const servidor = express();
servidor.use( express.json() );

servidor.get('/helloworld', (req, resp) => {
    resp.send('Hello World')
})

servidor.get('/mensagem/boasvindas/:nome', (req, resp) => {
    let nome = req.params.nome
    resp.send(`Olá, seja bem-vindo(a) ${nome}!!!`)
})

servidor.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let soma = n1 + n2
    resp.send(`${n1} + ${n2} = ${soma}`)
})

servidor.post('/media', (req, resp) => {
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3
    let media = (n1 + n2 + n3) /3
    resp.send(`A média é ${media}`)
})

servidor.post('/dobro', (req, resp) => {
    let nums = req.body.numeros

    let nums2 = []
    for (let i  = 0; i < nums.length; i++) {
        nums2[i] = nums[i] *2
    }

    resp.send('O dobro dos numeros é ' + nums2)
})

servidor.post('/loja/pedido', (req, resp) => {
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
})

servidor.post('/loja/pedido/completo', (req, resp) => {
    let parcelas = req.body.parcelas
    let itens = req.body.itens
    let cupom = req.query.cupom

    let total = 0
    for (let product of itens) {
        total += product.preco
    }

    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    } if (cupom == 100) {
        total -= 100 
    }
    
    resp.send(`O total é R$ ${total.toFixed(2)}`)
})

servidor.listen(5001,
    () => console.log('---> API subiu com sucesso na porta 5001!'));