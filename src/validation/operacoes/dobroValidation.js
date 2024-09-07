export function validarDobro(req) {
    if (!req.body.numeros || isNaN(req.body.numeros)) 
        throw new Error('O parâmetro números está inválido')
}
