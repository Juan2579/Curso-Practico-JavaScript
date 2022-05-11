function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento - verificarCupon();
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100 

    return precioConDescuento;
}

function verificarCupon(){
    //Cupones
    const cuponCodigos ={
        tienda2022: 30,
        clientes2022: 20,
        regalo2021: 10
    }
    const cuponPorDefecto = 0;

    //Traer el cupon del input
    const inputCupon = document.getElementById("inputCoupon");
    const codigo = inputCupon.value
    const cupon = cuponCodigos[codigo] || cuponPorDefecto

    return cupon
}



function priceWithDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("priceP");

    
    if (verificarCupon() !== 0){
        resultP.innerText = "El precio con descuento es de " + "$" + precioConDescuento + " (tu cupón te dió un " + verificarCupon() + "% extra de descuento)"
    } else {
        resultP.innerText = "El precio con descuento es de " + "$" + precioConDescuento
    }

}