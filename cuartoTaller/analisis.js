//Helper functions

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

const salariosColombia = colombia.map(
    function(persona){
        return persona.salary
})

const salariosColombiaOrdenados = salariosColombia.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
})

const medianaGeneralColombia = Number(calcularMediana(salariosColombiaOrdenados));


//Mediana del top 10%

const spliceStart = (salariosColombiaOrdenados.length * 90) / 100;
const spliceCount = salariosColombiaOrdenados.length - spliceStart

const salariosTop10Colombia = salariosColombiaOrdenados.splice(spliceStart, spliceCount)

const medianaTop10Colombia = Number(calcularMediana(salariosTop10Colombia))