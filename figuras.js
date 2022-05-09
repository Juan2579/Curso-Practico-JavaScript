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
    return parseFloat(diametro * PI  .toFixed(2));
    //parseFloat(perimetroCirculo.toFixed(2)) Con esto indicamos el numero de decimales que queremos que se nos retornen, para que no sean tantos. El parseFloat es para que convirtamos el numero a Number ya que la funcion .toFixed nos lo devuelve como String.
} 

function areaCirculo(radio) {
    return (radio * radio) * PI
}
