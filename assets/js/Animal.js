class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;
        //Clousers
        this.getNombre = ()=> Nombre;
        this.getEdad = ()=> Edad;
        this.getImg = ()=> Img;
        this.getComentarios = ()=>Comentarios;
        this.setComentarios = (comentarios) => Comentarios = comentarios;
        this.getSonido = ()=> Sonido;
    }
    //Getters y Setters
    get Nombre(){
        return this.getNombre();
    }
    get Edad(){
        return this.getEdad();
    }
    get Img(){
        return this.getImg();
    }
    get Comentarios(){
        return this.getComentarios();
    }
    set Comentario(comentarios){
        return this.setComentarios(comentarios);
    }
    get Sonido(){
        return this.getSonido();
    }

}

export default Animal;
