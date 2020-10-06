//function declaration

saludar('Juan'); //No importa si la llamamos antes de declararla

function saludar(nombre){
    console.log("Bienvenido ",nombre);
}

//function expression
const saludarCliente = function (nombre){ //Hay que declararla antes de llamarla
    console.log("Bienvenido ",nombre);
}

saludarCliente("Melanie");

//Funciones con parametros por default

function actividad(nombre="walter white",actividad="enseñando quimica"){
    console.log(`La persona ${nombre} , esta realizando la actividad ${actividad}`);
}

actividad("melanie","aprendiendo javascript");
actividad("pedro", "actualizando la base de datos");
actividad();
actividad("ana");


//Arrow functions

let viajando = function(lugar){
    return `Viajado a la ciudad de: ${lugar}`; // Funcion con return
}

let viaje = viajando('Salinas');

let viajando1 = lugar => {
    return `Viajado a la ciudad de: ${lugar}`; // Funcion con return
}

let viaje1 = viajando('Babahoyo');

let viajando2 = lugar => `Viajado a la ciudad de: ${lugar}`; // Funcion con return

let viaje2 = viajando2('Playas');


