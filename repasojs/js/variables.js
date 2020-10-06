// Variables en Javascript anterior forma
var nombre = "Melanie";
var aprendiendo;
aprendiento = true;
aprendiendo = false;
aprendiendo = "20";
aprendiento = "hola";
aprendiendo = 'Javascript';
console.log(aprendiendo);

//Nueva forma de variables

const nombre1 = "thalia"; //Debo darle valor desde el inicio y no puede cambiar su valor
const precio = 30;

let apellido; //Se puede inicializar vacia
apellido = "Lasso";
apellido = "acosta"; //Se puede cambiar el valor

//Variables scope ejemplo var

var musica = "Rock";
if (musica){
    var musica = "pop";
    console.log('Dentro del if: ',musica);
}
console.log('Fuera del if: ',musica);

//Variables scope ejemplo let o const

let musica1 = "Rock";
if (musica1){
    let musica1 = "pop";
    console.log('Dentro del if: ',musica1);
}
console.log('Fuera del if: ',musica1);

//Template strings

const nombre2 = "Melanie";
const trabajo = "web developer";

console.log('Nombre: ' + nombre + ' Trabajo: ' + trabajo); //Antigua forma de imprimir
console.log(`Nombre: ${nombre} Trabajo: ${trabajo}`) //Nueva forma de imprimir

const contenedorApp = document.querySelector('#app');
let plantilla =`<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
                </ul>`;
contenedorApp.innerHTML = plantilla;