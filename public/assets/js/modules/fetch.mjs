/*

NO OLVIDAR PONER LA FIRMA DE INESTROZA

*/

const getData = async(url) => {

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        
        const result = await response.json();
        return result;

    } catch (error){
        return error;
    }
};

export{
    getData
};