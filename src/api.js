import 'dotenv/config.js';

import express from 'express';
import multer from 'multer';

const servidor = express();
servidor.use( express.json() );

let uploadPerfil = multer({ dest: './storage/perfil' })





servidor.post('/media', (req, resp) => {
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3
    let media = (n1 + n2 + n3) /3
    resp.send(`A média é ${media}`)
});

servidor.post('/dobro', (req, resp) => {
    let nums = req.body.numeros

    let nums2 = []
    for (let i  = 0; i < nums.length; i++) {
        nums2[i] = nums[i] *2
    }

    resp.send('O dobro dos numeros é ' + nums2)
});

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
});

servidor.post('/loja/pedido/completo', (req, resp) => {
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

servidor.post('/perfil/capa', uploadPerfil.single('imagem'), (req, resp) => {
    let caminho = req.file.path
    let extensao = req.file.mimetype
    let nome = req.file.originalname

    resp.send({
        caminho: caminho,
        extensao: extensao,
        nome: nome
    })
})

const PORTA = process.env.PORTA;

servidor.listen(PORTA,
    () => console.log(`---> API subiu com sucesso na porta ${PORTA}!`));