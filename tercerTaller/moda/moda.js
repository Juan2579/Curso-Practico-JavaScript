let inputNumbers = document.getElementById("inputNumbers");

let cardInfo = document.querySelector('.card_info')

let cardResults = document.querySelector('.card_results')
let newInputs = document.querySelector('.card_newInputs')
let cardPrintResult = document.querySelector('.card_printResult')

//Funciones anteriores

function mostrarDatos(){
    if (inputNumbers.value > 0){
        cardInfo.style.display = 'none';
        cardResults.style.display = 'flex';

        for(let i = 0; i < inputNumbers.value; i++){
            newInputs.innerHTML += `<input class="" id="" type="number">`;
        }
    
    }   
}

//Funciones nuevas

function calcularModa(lista){
    const listaCount = {}

    lista.map(function(elemento){
    if (listaCount[elemento]){
        listaCount[elemento] += 1;
    } else {
        listaCount[elemento] = 1
    }
    
    })

    const listaArray = Object.entries(listaCount).sort(function(elementoA, elementoB){
    return elementoA[1] - elementoB[1];
    })

    const moda = listaArray[listaArray.length - 1]
    if(moda[1] <= 1){
        return "No hay una moda"

    } else{
        return "La moda es " + moda[0] + ", se repite " + moda[1] + " veces" 
    }
    
}

function resultadoModa() {
    const listaInputs = document.querySelectorAll('.card_results .card_newInputs input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }
    cardPrintResult.innerText = calcularModa(lista); 
}
