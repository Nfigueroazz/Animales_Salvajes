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
animal.addEventListener('change', async () => {
    const { animales } = await Animales.getData();
    const nombreAnimal = animal.value;
    const animalElegido = animales.find(a => a.name == nombreAnimal);
    //Imagen
    const imagenAnimal = animalElegido.imagen;
    const imagenRuta = `./assets/imgs/${imagenAnimal}`;
    console.warn('Mostrar lo que captura imagenAnimal')
    console.log(imagenAnimal);
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
const registroAnimales = document.getElementById('Animales')

//Crear tarjeta Animal 
botonAgregar.addEventListener('click', async (e) => {
    e.preventDefault();
    const imagenAnimalBackground = vistaPrevia.style.backgroundImage;

    //El background devuelve un string con la url, el slice corta los caracteres para dejar la ruta directa
    const urlImagenAnimal = imagenAnimalBackground.slice(5, imagenAnimalBackground.length - 2);
    //Sonido
    const { animales } = await Animales.getData();
    const nombreAnimal = animal.value;
    const animalElegido = animales.find(a => a.name == nombreAnimal);
    const sonidoAnimal = animalElegido.sonido;
    const sonidoRuta = `./assets/sounds/${sonidoAnimal}`;
    console.warn('Mostrar lo que captura sonidoAnimal')
    console.log(sonidoAnimal);

    if (validarCampos(animal, edad, comentarios, urlImagenAnimal)) {
        //Crear nuevo objeto animal
        if (animal.value == 'Aguila') {
            nuevoAnimal = new Aguila(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
        }
        if (animal.value == 'Leon') {
            nuevoAnimal = new Leon(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
        }
        if (animal.value == 'Oso') {
            nuevoAnimal = new Oso(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
        }
        if (animal.value == 'Lobo') {
            nuevoAnimal = new Lobo(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
        }
        if (animal.value == 'Serpiente') {
            nuevoAnimal = new Serpiente(animal.value, edad.value, urlImagenAnimal, comentarios.value, sonidoRuta);
        }

        console.warn('Mostrar nuevo animal');
        console.log(nuevoAnimal);
        //Agregar nuevoAnimal al arreglo
        animalesSalvajes.push(nuevoAnimal)

        console.warn('Mostrar arreglo animales');
        console.log(animalesSalvajes);
        //Insertar en Tabla
        imagenPrevia(animalesSalvajes);
        limpiarFormulario(animal, edad, comentarios);
        constriurModal(animalesSalvajes);

    } else {
        alert('Faltan datos por completar');
    }

})

//Metodo para validar que se completen todos los campos
const validarCampos = (animal, edad, comentarios, urlImagenAnimal) => {
    if ((animal.value !== "" && animal.value !== 'Seleccione un animal') && (edad.value !== "" && edad.value !== 'Seleccione un rango de años') && comentarios.value !== "" && urlImagenAnimal !== "") {
        return true;
    } else {
        return false;
    }
}

//Método para limpiar el formulario una vez creado un animal 
const limpiarFormulario = (animal, edad, comentarios) => {
    animal.value = "Seleccione un animal"
    edad.value = "Seleccione un rango de años"
    comentarios.value = ""
    const imagenDefecto = document.getElementById('preview')
    imagenDefecto.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}

//Muestra en la tabla de animales la imagen y el sonido del animal creado
const imagenPrevia = (animalesSalvajes) => {
    registroAnimales.innerHTML = '';
    animalesSalvajes.forEach((a, p) => {
        registroAnimales.innerHTML += /*html*/ `
        <div class="card bg-warning text-center text-dark my-auto mx-auto h-50">
            <div class="card-body" data-bs-toggle="modal" data-bs-target="#${a.Nombre}-${p}">
            <img style="width: 11rem;" src="${a.Img}" class="card-img" alt="imagen">
            </div>
            <div class="card-footer">
                <img style="height: 2.5rem;" type="button" src="./assets/imgs/audio.svg" onclick="reproducirSonido('${a.Sonido}')" alt="audio">
            </div>
        </div>
        `;
    });
}

//Para poder reproducir el sonido
window.reproducirSonido = (sonido) => {
    const audio = new Audio(sonido);
    audio.play();
}

//Para costruir el Modal
const myInput = document.getElementById('myInput')
const mostrarModal = document.getElementById('modalAnimal')
const constriurModal = (animalesSalvajes)=>{
    mostrarModal.innerHTML = '';
    animalesSalvajes.forEach((m, p)=> {
    mostrarModal.innerHTML +=
    `<div id="${m.Nombre}-${p}" class="modal fade">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-white w-50">
                <div class="modal-header">
                    <img style="width:15rem;" src="${m.Img}" class="card-img" alt="imagen">
                </div>
                <div class="modal-body text-center">
                    <p>${m.Edad}</p>
                    <p><b>Comentarios:</b></p>
                </div>
                <div class="modal-footer text-center">
                <p>${m.Comentarios}</p>
                </div>
            </div>
        </div>
    </div>`
    });
}
/*Un comentario de un especialista que tiene una extensión muy larga con la única finalidad de dar prueba a la funcionalidad de la configuración de boostrap en cuanto al estilo del contenedor del modal.*/