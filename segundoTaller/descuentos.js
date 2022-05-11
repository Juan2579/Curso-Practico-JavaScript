function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100 

    return precioConDescuento;
}

function priceWithDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value


    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("priceP");

    resultP.innerText = "El precio con descuento es de " + "$" + precioConDescuento
}