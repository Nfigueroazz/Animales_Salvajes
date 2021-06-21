import Animal from "./Animal.js";
import Aguila from "./Aguila.js";
import Leon from "./Leon.js";
import Serpiente from "./Serpiente.js";
import Oso from "./Oso.js";
import Lobo from "./Lobo.js";

//URL
const urlBase = '../animales.json';

//IIFE
const request = (async () =>{
    try {
        const response = await fetch(urlBase);
        const data = await response.json(urlBase);
        console.log('Data animales.json');
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(error);
    }
})();