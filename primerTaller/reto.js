function calcularAltura(lado1, lado2, base){
    if (lado1 == lado2 && lado2 !== base || lado2 == base && base !== lado1 || lado1 == base && base !== lado2) {
        console.log("Es un triangulo isosceles")
        const altura = Math.sqrt((lado1 ** 2) - ((base ** 2)/4))
        return console.log(altura)
    }
}
