let inputNumbers = document.getElementById("inputNumbers");

let cardInfo = document.querySelector('.card_info')

let cardResults = document.querySelector('.card_results')
let newInputs = document.querySelector('.card_newInputs')
let cardPrintResult = document.querySelector('.card_printResult')


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


//Helper functions

function mostrarDatos(){
    if (inputNumbers.value > 0){
        cardInfo.style.display = 'none';
        cardResults.style.display = 'flex';

        for(let i = 0; i < inputNumbers.value; i++){
            newInputs.innerHTML += `<input class="" id="" type="number" placeholder="$" >`;
        }
    
    }   
}


function esPar(numerito){
    return (numerito % 2 === 0);
}

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


//Mediana calculadora
function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2)

    if(esPar(lista.length)){

        const elemento1 = lista[mitadLista - 1]
        const elemento2 = lista[mitadLista];

        const mediana = calcularMediaAritmetica([elemento1, elemento2])
        return mediana
    }else{
        const mediana = lista[mitadLista]
        return mediana
    }
}

//Variables de la mediana general
function calcularMedianaSalarios(lista) {
    const salariosColombia = lista.map(
        function(salario){
            return salario
    })
    const salariosColombiaOrdenados = lista.sort(
        function(salaryA, salaryB){
            return salaryA - salaryB;
    })
    const medianaGeneralColombia = Number(calcularMediana(lista));

    return medianaGeneralColombia
}

// //Mediana del top 10%
// function calculartop10Colombia(listaOrdenada) {
//     const spliceStart = (listaOrdenada.length * 90) / 100;
//     const spliceCount = listaOrdenada.length - spliceStart

//     const salariosTop10Colombia = listaOrdenada.splice(spliceStart, spliceCount)

//     const medianaTop10Colombia = Number(calcularMediana(salariosTop10Colombia))

//     return medianaTop10Colombia;
// }

function resultadoSalarios() {
    const listaInputs = document.querySelectorAll('.card_results .card_newInputs input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }
    cardPrintResult.innerText = "The median of the salaries is $" + calcularMedianaSalarios(lista) + " and the average of the salaries is $" + calcularMediaAritmetica(lista)
}
