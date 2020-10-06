function mostrarInformacionTarea(tarea, prioridad){
    return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}


//Creacion de objetos anteriormente

const persona = {
    nombre: 'melanie',
    apellido: 'lasso',
    edad: 23,
    profesion: 'web developer'
}

console.log(persona);
console.log(persona.nombre);
console.log(persona['apellido']);

//Creacion de constructores

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// funciones con tipos de objetos

Tarea.prototype.mostrarInformacionTarea = function(){
    return `La siguiente ${this.tarea} tiene esta prioridad ${prioridad}`;
}

const tarea1 = new Tarea('Aprender Javascript', 'urgente');
const tarea2 = new Tarea('Aprender Python', 'urgente');
const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea);
//console.log(persona.mostrarInformacionTarea); Esto no se puede hacer debido a que la funcion solo puede ser del objeto tarea

//Destructuring de objetos

const aprendiendoJS = {
    version: 'ES6+',
    frameworks: ['React','Vue','Angular']
}

console.log(aprendiendoJS);

//version anterior

let version = aprendiendoJS.version;
console.log(version);

const aprendiendoJS1 = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5+'
    },
    frameworks: ['React','Vue','Angular']
}

console.log(aprendiendoJS1);

//version nueva

let {version, frameworks} = aprendiendoJS1;
console.log(version);
console.log(frameworks);

let anterior = aprendiendoJS1.version;
console.log(version);

//Object literal enhancement

const band = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Ppupets','Enter Sandman'];

//forma anterior

const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica1);

//forma nueva
const metallica1 = {banda,genero,canciones} ;
console.log(metallica1);

//Funciones en objetos

const estudiante = {
    nombre: 'jossue',
    apellido: 'pazan',
    edad: 25,
    profesion: 'web developer',
    mostrarInformacion : function(){
        console.log(`El estudiante ${this.nombre} tiene una edad de ${this.edad}`;)
    }
}

estudiante.mostrarInformacion();