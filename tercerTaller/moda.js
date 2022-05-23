let inputNumbersMode = document.getElementById("inputNumbersMode");

let cardInfoMode = document.querySelector('.card_info--mode')

let cardResultsMode = document.querySelector('.card_results--mode')
let newInputsMode = document.querySelector('.card_newInputs--mode')
let cardPrintResultMode = document.querySelector('.card_printResult--mode')

//Funciones anteriores

function mostrarDatosModa(){
    if (inputNumbersMode.value > 0){
        cardInfoMode.style.display = 'none';
        cardResultsMode.style.display = 'flex';

        for(let i = 0; i < inputNumbersMode.value; i++){
            newInputsMode.innerHTML += `<input class="" id="" type="number">`;
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
        return "There is no mode"

    } else{
        return "The mode is " + moda[0] + ", is repeated " + moda[1] + " times" 
    }
    
}

function resultadoModa() {
    const listaInputs = document.querySelectorAll('.card_results--mode .card_newInputs--mode input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }
    cardPrintResultMode.innerText = calcularModa(lista); 
}
