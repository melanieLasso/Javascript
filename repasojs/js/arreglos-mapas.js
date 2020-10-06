//Recorrer elementos de una lista

const materias = ['Daw','distribuidos','ingenieria'];
let html = ``;
materias.forEach(materia => {   //con un for
    html += `<li>${materia}</li>`;
})

const appcontenedor= document.querySelector('#app');
appcontenedor.innerHTML += html;

const lenguajes = ['Javascript','python','php']; //con mapas
lenguajes.map(lenguaje =>{
    console.log(`El lenguaje es: ${lenguaje}`);
});

const carro = {
    color: 'verde',
    marca: 'hyundai',
    año: 2015
};

console.log(Object.keys(carro));  //con object keys

// Combinacion de listas o arreglos

let verduras = ['tomate','azanahoria','lechuga'];
let frutas = ['frutilla','guineo','manzana'];

let combinacion = [...verduras, ... frutas];
console.log(combinacion);

let copia = [...verduras]; //Hace una copia del arreglo
let [ultimo] = copia.reverse(); //obtengo el ultimo dato
console.log(ultimo);
console.log(verduras); //Los valores quedan iguales, se modifica la copia

let copia1 = verduras.reverse();
console.log(verduras); //Los arreglos cambian

//Busquedas en listas o arreglos

const estudiantes = [ //lista de objetos
   {nombre: 'Melanie', edad: 23, curso: '9no'}, 
   {nombre: 'Joseline', edad: 19, curso: '2do'}, 
   {nombre: 'Luis', edad: 28, curso: '9no'}, 
   {nombre: 'Pablo', edad: 21, curso: '5to'}, 
   {nombre: 'Laura', edad: 15, curso: '2do'}, 
];

console.log(estudiantes);

const mayores = estudiantes.filter(estudiante => {
    return estudiante.edad > 18;
})

console.log(mayores); //Imprime un arreglo de personas mayores de 18 años

const persona = estudiantes.find(estudiante =>{
    return estudiante.nombre === 'Melanie'; //tres = significa que ambos elementos deben ser iguales en contenido y tipo
})

console.log(persona); //devuelve el objeto u objetos
console.log(`La estudiante ${persona.nombre} esta en el curso ${persona.curso}`);

let total = estudiantes.reduce((totalEdades, estudiante) =>{
    return totalEdades + estudiante.edad; // vamos sumando las edades de los estudiantes y se guardan en totalEdades
},0); //se inicializa con valor 0 la variable totalEdades

let numEstudiantes = estudiantes.length; //nos permite saber la cantidad de elementos
console.log(numEstudiantes);
console.log(total);
let edadPromedio = total/numEstudiantes;
console.log(edadPromedio);