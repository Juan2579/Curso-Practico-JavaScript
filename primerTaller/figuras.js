const burgerButton = document.querySelector('.button_burger')
const xButton = document.querySelector('.button_x')
const mobileNavigation = document.querySelector('.header_mobile-navigation')
const squareResult = document.querySelector('.square_result')
const triangleResult = document.querySelector('.triangle_result')
const circleResult = document.querySelector('.circle_result')


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


//Codigo del cuadrado
function perimetroCuadrado(lado){
    return lado* 4;
}  

function areaCuadrado(lado){
    return lado ** 2;
}


//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


//Codigo del circulo

function diametroCirculo(radio){
    return radio * 2
} 

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return parseFloat(diametro * PI).toFixed(2);
    //parseFloat(perimetroCirculo.toFixed(2)) Con esto indicamos el numero de decimales que queremos que se nos retornen, para que no sean tantos. El parseFloat es para que convirtamos el numero a Number ya que la funcion .toFixed nos lo devuelve como String.
} 

function areaCirculo(radio) {
    return parseFloat((radio * radio) * PI).toFixed(2);
}


//Aqui interactuamos con el HTML

//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    squareResult.innerText = "The perimeter of the square is: " + perimetro + "cm"

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value)
    squareResult.innerText = "The area of the square is: " + area + "cm2"
}


//TRIANGULO
function calcularPerimetroTriangulo(){
    //Lado1
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value)
    //Lado2
    const inputLado2 = document.getElementById("inputTrianguloLado2")
    const valueLado2 = parseInt(inputLado2.value)
    //Base
    const inputBase = document.getElementById("inputTrianguloBase")
    const valueBase = parseInt(inputBase.value)

    //Funcion del perimetro
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase)
    triangleResult.innerText = "The perimeter of the triangle is: " + perimetro + "cm"
}

function calcularAreaTriangulo(){
    //Base
    const inputBase = document.getElementById("inputTrianguloBase")
    const valueBase = parseInt(inputBase.value)
    //Altura
    const inputAltura = document.getElementById("inputTrianguloAltura")
    const valueAltura = parseInt(inputAltura.value)

    //Funcion del area
    const area = areaTriangulo(valueBase, valueAltura)
    triangleResult.innerText = "The area of the triangle is: " + area + "cm2"
}

//CIRCULO
function calcularDiametroCirculo(){
    //radio
    const inputRadio = document.getElementById("inputCirculo")
    const valueRadio = parseInt(inputRadio.value)

    //Funcion del diametro
    const diametro = diametroCirculo(valueRadio)
    circleResult.innerText = "The diameter of the circle is: " + diametro + "cm";
}

function calcularPerimetroCirculo(){
    //radio
    const inputRadio = document.getElementById("inputCirculo")
    const valueRadio = parseInt(inputRadio.value)

    //Funcion del perimetro
    const perimetro = perimetroCirculo(valueRadio)
    circleResult.innerText = "The perimeter of the circle is: " + perimetro + "cm";
}
function calcularAreaCirculo(){
    //radio
    const inputRadio = document.getElementById("inputCirculo")
    const valueRadio = parseInt(inputRadio.value)

    //Funcion del area
    const area = areaCirculo(valueRadio)
    circleResult.innerText = "The area of the circle is: " + area + "cm2";
}