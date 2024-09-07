export function validarDivisao(req) {
    if (!req.body.n1 || isNaN(req.body.n1)) 
        throw new Error('O parâmetro n1 está incorreto')
    
    if (!req.body.n2 || isNaN(req.body.n2)) 
        throw new Error('O parâmetro n2 está incorreto')
}
