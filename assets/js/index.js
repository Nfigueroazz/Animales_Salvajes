import Animal from "./Animal.js";
import Aguila from "./Aguila.js";
import Leon from "./Leon.js";
import Serpiente from "./Serpiente.js";
import Oso from "./Oso.js";
import Lobo from "./Lobo.js";
import Animales from "./consulta.js";

const nombre = document.getElementById('animal').value;
const edad = document.getElementById('edad').value;
const comentario = document.getElementById('comentarios').value;

//Instancias de las clases

const { animales } = await Animales.getData();
console.log('Data Animales Destructuring');
console.log(animales);
const { imagen } = animales.find((a) => a.name == nombre);
console.log('Destructuring imagen');
console.log(imagen);
document.getElementById('preview').style.backgroundImage = `url(./assets/imgs/${imagen})`;

const agregarAnimal = document.getElementById('btnRegistrar');
//Arreglo animales
const animalesSalvajes = [];
let nuevoAnimal;
agregarAnimal.addEventListener('click', (evento) => {
    evento.preventDefault();
    //Crear nuevo objeto animal
    nuevoAnimal = new Animal(nombre.value, edad.value, comentario.value, imagen, sonido.value);

    if(nombre.value && edad.value && comentario.value){
        console.log('Datos nuevo animal');
        console.log(nuevoAnimal);
        animalesSalvajes.push(nuevoAnimal);
        //reloadTable();
        //Para setear a sus valores iniciales
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentario = '';
        previsualizacion = 'none';
    } else {
        alert('Faltan datos por llenar');
    }

});
    


