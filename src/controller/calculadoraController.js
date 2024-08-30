servidor.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let soma = n1 + n2
    resp.send(`${n1} + ${n2} = ${soma}`)
});