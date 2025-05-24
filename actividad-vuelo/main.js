//1. Captura de datos.
//Creamos una funcion que retorne un objeto que obtenga los datos de los inputs.
const obtenerDatosAvion =()=>{

    let datosObtenidos = {
        nombre: document.querySelector('#nombre').value, 
        dni: document.querySelector('#dni').value, 
        telefono: document.querySelector('#telefono').value, 
        origen: document.querySelector('#origen').value, 
        destino: document.querySelector('#destino').value, 
        fecha: document.querySelector('#fecha').value, 
        hora: document.querySelector('#hora').value, 
        clase: document.querySelector('#clase').value, 
        equipaje: document.querySelector('#equipaje').checked ? //Controla si el checkbox esta marcado
            'Si' : 'No' 
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
        <p><strong>Equipaje Adicional: </strong>${reserva.equipaje}</p>
        --------------------------------------------------------
    `;
};

//Se captura el elemento form y se le añade event listener que se ejecuta cuando
//el usuario hace click en el botón (submit/enviar)
document.querySelector('#formReservaAvion').addEventListener('submit', (e) =>{

    e.preventDefault(); //Para que la pagina no se refresque

    const reserva = obtenerDatosAvion(); //Guardamos en memoria

    agregarReservaAvion(reserva); //Guardamos esos datos en un array

    mostrarReservaAvion(reserva); //Mostramos en el resumen

    document.querySelector('#formReservaAvion').reset(); //El formulario se resetea

    console.log(reservasAvion); //Se imprime en consola las reserva
})