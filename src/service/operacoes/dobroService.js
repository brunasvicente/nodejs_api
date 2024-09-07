export default function dobroService(numeros) {
    let numeros2 = []

    for (let i  = 0; i < numeros.length; i++) {
        numeros2[i] = numeros[i] *2
    }

    return numeros2;
}
