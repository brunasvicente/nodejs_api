export function validarSoma(req) {
    if (!req.query.n1 || isNaN(req.query.n1)) 
        throw new Error('O parâmetro n1 está inválido')
    
    if (!req.query.n2 || isNaN(req.query.n2)) 
        throw new Error('O parâmetro n2 está inválido')
}
