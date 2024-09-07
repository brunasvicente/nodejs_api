export default function pedidoService(total, parcelas, cupom) {
    if (parcelas > 1) {
        let juros = total * 0.05
        total += juros
    } if (cupom == 100) {
        total -= 100
    }

    return total;
}
