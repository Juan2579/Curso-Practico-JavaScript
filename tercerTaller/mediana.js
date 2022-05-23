let inputNumbersMedian = document.getElementById("inputNumbersMedian");

let cardInfoMedian = document.querySelector('.card_info--median')

let cardResultsMedian = document.querySelector('.card_results--median');
let newInputsMedian = document.querySelector('.card_newInputs--median')
let cardPrintResultMedian = document.querySelector('.card_printResult--median')


//Funciones del ejercicio anterior
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

    })
    const promedioLista = sumaLista / lista.length;

    return promedioLista.toFixed(2);
} 

function mostrarDatosMediana(){
    if (inputNumbersMedian.value > 0){
        cardInfoMedian.style.display = 'none';
        cardResultsMedian.style.display = 'flex';

        for(let i = 0; i < inputNumbersMedian.value; i++){
            newInputsMedian.innerHTML += `<input class="" id="" type="number">`;
        }
    
    }   
}

//Funciones de este ejercicio
function esPar(numerito){
    if (numerito % 2 === 0) { //Aca utilizamos el modulo, que es el residuo de una division. Entonces si el residuo de la division de nuestro numero por dos es igual a cero, entonces nuestro numero si o si es par. De lo contrario va a ser impar
        return true;
    } else {
        return false;
    }
}



function calcularMediana(lista){

    let mediana;
    const mitadLista = parseInt(lista.length / 2);
    if (esPar(lista.length) == true) {
        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista]
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
    
        mediana = promedioElemento1y2;
        
    }else{
        mediana = lista[mitadLista];
    }
    return mediana
}

function resultadoMediana() {
    const listaInputs = document.querySelectorAll('.card_results--median .card_newInputs--median input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }
    cardPrintResultMedian.innerText = "La mediana es  " + calcularMediana(lista.sort(function(a, b){
        return a - b;
    })); 
}
