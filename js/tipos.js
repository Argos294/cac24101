//tipos de datos
//crear una persona con nombre,apellido,edad,es Argentina
const nombre = "carlos";

//nombre es un string

const edad = 37;
//son de tipo Number

const esArgentina = 'true';
// es boolean

function saludar() {

}

//tipo de datos?

const persona = {
    nombre: nombre,
    edad: edad,
    fx: saludar,
    esArgentina: esArgentina,
}

//OBJECT
//console.log(typeof (persona));
//console.log(typeof (persona.fx));
//console.log(typeof (persona.esArgentina));


/*function determinaTipoDeDatos() {
    const valor = document.getElementById('valor').value;
    console.log(typeof (valor.value));
    // debugger;
    //si es number?
    const isNumber = Number(valor) != NaN;
    //tipo de datos
    //operadores
    //console.log(parseInt(valor))//intenta convertir algo "valor" a un numero entero,no admite decimales

    //console.log(parseFloat(valor))//idem,pero admite numeros con decimales

    // console.log(+ valor);

    const isString = String(valor);
    const isBoolean = valor === 'true' || valor === 'false';
} */

function calcular() {
    const a = Number(document.getElementById('valorA').value);
    const b = parseInt(obtenerPorId('valorB').value);

    //a > b?
    const res = obtenerPorId('comparacion');
    if (a > b) {
        //actualizo el innertext
        res.innerText = 'A es Mayor que B';
    }
    if (a < b) {
        res.innerText = 'A es Menosr que B';
    }
    if (a === b) {
        res.innerText = 'A es Igual que B';
    }
    //¿retorna algo? No es procedimiento
}

function obtenerPorId(htmlId) {
    return document.getElementById(htmlId);
}