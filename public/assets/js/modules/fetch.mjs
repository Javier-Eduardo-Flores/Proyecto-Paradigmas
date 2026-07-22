/**
 * 
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/07/21
 * 
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