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

function calcularMediaArmonica(lista){

    let numeroDeElementos = lista.length
    let sumaLista = 0

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + (1 / lista[i])
    }
    const mediaArmonica = numeroDeElementos / sumaLista

    return Number(mediaArmonica.toFixed(4))


}
function resultadoMediaArmonica() {
    const listaInputs = document.querySelectorAll('.card_results .card_newInputs input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }
    cardPrintResult.innerText = "La media armónica es " + calcularMediaArmonica(lista); 
}