import Animal from "./Animal.js";
import Aguila from "./Aguila.js";
import Leon from "./Leon.js";
import Serpiente from "./Serpiente.js";
import Oso from "./Oso.js";
import Lobo from "./Lobo.js";
import Animales from "./consulta.js";

//Capta elementos DOM
const animal = document.getElementById('animal');
const vistaPrevia = document.getElementById('preview');

//Evento change para imagen
animal.addEventListener('change', async()=>{
    const {animales} = await Animales.getData();
    const nombreAnimal = animal.value;
    const animalElegido = animales.find(a => a.name == nombreAnimal);
    //Imagen
    const imagenAnimal = animalElegido.imagen;
    const imagenRuta = `./assets/imgs/${imagenAnimal}`;
    vistaPrevia.innerHTML = '';
    vistaPrevia.style.backgroundImage = `url(${imagenRuta})`
})

//Arreglo animales
const animalesSalvajes = [];
//Nuevo animal
let nuevoAnimal;

//Capta elementos DOM
const botonAgregar = document.getElementById('btnRegistrar');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');;
const registroAnimales = document.getElementById('Tabla')

//Crear tarjeta Animal 
botonAgregar.addEventListener('click', async(e) => {
    e.preventDefault();
    const imagenAnimalBackground = vistaPrevia.style.backgroundImage;
    const urlImagenAnimal = imagenAnimalBackground.slice(5, imagenAnimalBackground.length - 2);
    //Sonido
    const {animales} = await Animales.getData();
    const nombreAnimal = animal.value;
    const animalElegido = animales.find(a => a.name == nombreAnimal);
    const sonidoAnimal = animalElegido.sound;
    const sonidoRuta = `./assets/sounds/${sonidoAnimal}`;

    validarCampos(animal, edad, comentarios, urlImagenAnimal);
    
    //Crear nuevo objeto animal
    if(animal.value == 'Aguila'){
        nuevoAnimal = new Aguila(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
    }
    if(animal.value == 'Leon'){
        nuevoAnimal = new Leon(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
    }
    if(animal.value == 'Oso'){
        nuevoAnimal = new Oso(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
    }
    if(animal.value == 'Lobo'){
        nuevoAnimal = new Lobo(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
    }
    if(animal.value == 'Serpiente'){
        nuevoAnimal = new Serpiente(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
    }

    console.log('Mostrar nuevo animal');
    console.log(nuevoAnimal);

    animalesSalvajes.push(nuevoAnimal)

    console.log('Mostrar arreglo animales');
    console.log(animalesSalvajes);

    limpiarFormulario(animal, edad, comentarios, imagenAnimalBackground);

})

const validarCampos = (animal, edad, comentarios, urlImagenAnimal) => {
    if(animal && edad && comentarios && urlImagenAnimal){
    } else {
        alert('Faltan datos por completar');
    }
}

const limpiarFormulario = (animal, edad, comentarios, imagenAnimalBackground) => {
    animal.value = "Seleccione un animal"
    edad.value = "Seleccione un rango de años"
    comentarios.value = ""
    const imagenDefecto = document.getElementById('preview')
    imagenDefecto.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}
