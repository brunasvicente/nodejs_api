export function validarMultiplicacao(req) {
    if (!req.params.n1 || isNaN(req.params.n1)) 
        throw new Error('O parâmetro n1 está inválido')
    
    if (!req.params.n2 || isNaN(req.params.n2)) 
        throw new Error('O parâmetro n2 está inválido')
}
