export function validarPedido(req) {
    if (!req.body.total || isNaN(req.body.total)) 
        throw new Error('O parâmetro total está inválido')

    if (!req.body.parcelas || isNaN(req.body.parcelas)) 
        throw new Error('O parâmetro parcelas está inválido')
    
    if (!req.body.cupom || isNaN(req.body.cupom)) 
        throw new Error('O parâmetro cupom está inválido')
}
