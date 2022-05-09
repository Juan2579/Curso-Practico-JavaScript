//Codigo del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2")
console.groupEnd();



//Codigo del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm" )

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2")
console.groupEnd();



//Codigo del circulo
console.group("Circulos")

//Radio
const radioCirculo = 4;
console.log("El radio es de: " + radioCirculo + "cm")

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro es de: " + diametroCirculo + "cm")

// PI
const PI = Math.PI;
console.log("El valor de PI es de: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro es de: " + parseFloat(perimetroCirculo.toFixed(2)) + "cm")
//parseFloat(perimetroCirculo.toFixed(2)) Con esto indicamos el numero de decimales que queremos que se nos retornen, para que no sean tantos. El parseFloat es para que convirtamos el numero a Number ya que la funcion .toFixed nos lo devuelve como String.
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area es de: " + areaCirculo + "cm2")
console.groupEnd();