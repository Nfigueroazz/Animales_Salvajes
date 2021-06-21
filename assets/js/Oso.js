import Animal from "./Animal.js";

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñir (){
        this.getSonido();
    }
}

export default Oso;