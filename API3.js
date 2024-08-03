    import express from 'express';
    const servidor = express();
    servidor.use( express.json() );

    servidor.get('/helloworld', (req, resp) => {
        resp.send('Hello World!!!')
    });

    servidor.get('/mensagem/boasvindas', (req, resp) => {
        resp.send('Olá, seja bem-vindo')
    })

    servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
        let n1 = Number(req.params.n1)
        let n2 = Number(req.params.n2)
        let soma = n1 + n2
        resp.send('A soma é ' + soma)
    })

    servidor.get('/calculadora/somar2', (req, resp) => {
        let n1 = Number(req.query.n1)
        let n2 = Number(req.query.n2)
        let soma = n1 + n2
        resp.send('A soma é ' + soma)
    })

    servidor.get('/mensagem/ola', (req, resp) => {
        let pessoa = req.query.nome ?? 'você'
        resp.send('Olá ' + pessoa)
    })



    servidor.post('/media', (req, resp) => {
        let n1 = req.body.nota1
        let n2 = req.body.nota2
        let n3 = req.body.nota3
        let media = (n1 + n2 + n3) / 3
        resp.send(`A média é ${media}`)
    })

    servidor.listen(5002, () => console.log('API subiu com sucesso na porta 5001'));