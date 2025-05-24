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

//2.Almacenar
//Almacenamos el objeto de la reserva en este array de acá abajo.
let reservasAvion = [];
const agregarReservaAvion = (reserva)=>{
    reservasAvion.push(reserva);
}

//3.Mostrar en pantalla

const mostrarReservaAvion = (reserva)=>{
    let resumenAvion = document.querySelector('#resumenAvion');
    resumenAvion.innerHTML = `
        <p><strong>Nombre completo: </strong>${reserva.nombre}</p>
        <p><strong>dni: </strong>${reserva.dni}</p>
        <p><strong>Teléfono: </strong>${reserva.telefono}</p>
        <p><strong>Origen: </strong>${reserva.origen}</p>
        <p><strong>Destino: </strong>${reserva.destino}</p>
        <p><strong>Fecha: </strong>${reserva.fecha}</p>
        <p><strong>Hora: </strong>${reserva.hora}</p>
        <p><strong>Clase: </strong>${reserva.clase}</p>
        <p><strong>Equipaje: </strong>${reserva.equipaje}</p>
        --------------------------------------------------------
    `;
};