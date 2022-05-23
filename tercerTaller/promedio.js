//Input que indica cuantos datos se ingresaran
let inputNumbersAverage = document.getElementById("inputNumbersAverage");

//Vamos a traer el contenedor donde pedimos los datos
let cardInfoAverage = document.querySelector('.card_info--average')

//Vamos a traer los dos nuevos contenedores, el primero el contenedor que tendra todo lo que agreguemos y el segundo será el contenedor donde se agregaran los inputs nuevos 

let cardResultsAverage = document.querySelector('.card_results--average')
let newInputsAverage = document.querySelector('.card_newInputs--average')
let cardPrintResultAverage = document.querySelector('.card_printResult--average')

function mostrarDatosPromedio(){
    cardInfoAverage.style.display = 'none';
    cardResultsAverage.style.display = 'flex';

    for(let i = 0; i < inputNumbersAverage.value; i++){
        newInputsAverage.innerHTML += `<input class="" id="" type="number">`;
    }

}

function resultadoPromedio(){
    const listaInputs = document.querySelectorAll('.card_results--average .card_newInputs--average input')

    let lista = [];

    for (let i = 0; i < listaInputs.length; i++) {
        lista.push(Number(listaInputs[i].value));
    }

    cardPrintResultAverage.innerText = "El promedio es de " + calcularPromedio(lista).toFixed(2); 

}



function calcularPromedio(lista){
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
