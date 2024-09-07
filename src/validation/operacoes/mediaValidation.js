export function validarMedia(req) {
    if (!req.body.nota1 || isNaN(req.body.nota1)) 
        throw new Error('O parâmetro nota1 está inválido')

    if (!req.body.nota2 || isNaN(req.body.nota2)) 
        throw new Error('O parâmetro nota2 está inválido')

    if (!req.body.nota3 || isNaN(req.body.nota3)) 
        throw new Error('O parâmetro nota3 está inválido')
}
