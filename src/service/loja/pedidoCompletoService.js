export function calcularTotal(parcelas, itens, cupom) {
    let total = 0

    for (let produto of itens) {
        total += produto.preco
    }

    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    } if (cupom == 100) {
        total -= 100 
    }

    return total
}

export function valorParcela(total, parcelas) {
    let v = total / parcelas
    return v
}
