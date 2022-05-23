const burgerButton = document.querySelector('.button_burger')
const xButton = document.querySelector('.button_x')
const mobileNavigation = document.querySelector('.header_mobile-navigation')

function appearNavigation() {
    burgerButton.style.display = 'none'
    xButton.style.display = 'block'

    mobileNavigation.style.display = 'block'

}
function dissapearNavigation() {
    burgerButton.style.display = 'block'
    xButton.style.display = 'none'

    mobileNavigation.style.display = 'none'
}


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
        resultP.innerText = "The price with discount is " + "$" + precioConDescuento + " (your coupon gave you an extra " + verificarCupon() + "% discount)"
    } else {
        resultP.innerText = "The price with discount is " + "$" + precioConDescuento
    }

}
