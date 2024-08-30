servidor.get('/helloworld', (req, resp) => {
    resp.send('Hello World')
});

servidor.get('/mensagem/boasvindas/:nome', (req, resp) => {
    let nome = req.params.nome
    resp.send(`Olá, seja bem-vindo(a) ${nome}!!!`)
});