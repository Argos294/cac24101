//base de js
/* 
 comentario de varias lineas
*/
/*puedo capturar el boton desde javascript y agregarle funcionalidad*/
//alert(hola mundo)
//capturar el boton buscar por su id
const botonEnHTML = document.getElementById('btnBuscar');
//agrego un click
botonEnHTML.addEventListener('click', buscar)
//cada linea termina en ;

//crear la accion=funcion buscar
function buscar() {
    //la logica de buscar va aca!!!

    //capturar el input por su id
    const txtEnHTML = document.getElementById('txt');

    //obtengo el valor de input
    const valorDelInput = txtEnHTML.value;
    //concatenar
    alert('busacando' + valorDelInput);
}