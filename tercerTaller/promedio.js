//Input que indica cuantos datos se ingresaran
let inputNumbers = document.getElementById("inputNumbers");

//Vamos a traer el contenedor donde pedimos los datos
let cardInfo = document.querySelector('.card_info')

//Vamos a traer los dos nuevos contenedores, el primero el contenedor que tendra todo lo que agreguemos y el segundo será el contenedor donde se agregaran los inputs nuevos 

let cardResults = document.querySelector('.card_results')
let newInputs = document.querySelector('.card_newInputs')
let cardPrintResult = document.querySelector('.card_printResult')

function mostrarDatos(){
    cardInfo.style.display = 'none';
    cardResults.style.display = 'flex';

    for(let i = 0; i < inputNumbers.value; i++){
        newInputs.innerHTML += `<input class="" id="" type="number">`;
    }

}

function resultadoMediaAritmetica(){
    const listaInputs = document.querySelectorAll('.card_results .card_newInputs input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }

    cardPrintResult.innerText = "El promedio es de " + calcularMediaAritmetica(lista); 

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

    return promedioLista;
} 
