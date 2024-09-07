export function validarBoasVindas(req) {
    if (!req.params.nome) 
        throw new Error('O parâmetro nome está inválido')
}
