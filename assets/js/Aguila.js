import Animal from "./Animal.js";

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar (){
        this.getSonido();
    }
}

export default Aguila;