//1. Captura de datos.
//Creamos una funcion que retorne un objeto que obtenga los datos de los inputs.
const obtenerDatosAvion =()=>{

    let datosObtenidos = {
        nombre: document.querySelector('#nombre').value, 
        dni: document.querySelector('#dni').value, 
        teléfono: document.querySelector('#telefono').value, 
        origen: document.querySelector('#origen').value, 
        destino: document.querySelector('#destino').value, 
        fecha: document.querySelector('#fecha').value, 
        hora: document.querySelector('#hora').value, 
        clase: document.querySelector('#clase').value, 
        equipaje: document.querySelector('#equipaje').checked ? //Controla si el checkbox esta marcado
            'Lleva equipaje adicional' : 'No lleva equipaje adicional' 
    }

    return datosObtenidos;
}