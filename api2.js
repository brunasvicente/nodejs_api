import express from 'express';
const servidor = express;
servidor.use( express.json() );

servidor.post('/media', (req, resp) => {
       let n1 = req.body.nota1
       let n2 = req.body.nota2
       let n3 = req.body.nota3
       let media = (n1 + n2 + n3) / 3
       
})

servidor.listen(5050, () => console.log('API subiu na porta 5050'))