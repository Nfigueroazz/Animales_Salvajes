//IIFE
const Animales = (() => {
    const getData = async () => {
        //URL
        const urlBase = '../animales.json';
        try {
            const response = await fetch(urlBase);
            const data = await response.json(urlBase);
            console.log('Data animales.json');
            console.log(data);
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
    return { getData };
})();

export default Animales;
