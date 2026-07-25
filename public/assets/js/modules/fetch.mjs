/**
 * 
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.2
 * @date 26/07/24
 * @since 26/06/29
 * 
 * 
 * Modificacion para que soporte el envio de parametros a traves de una URL
 * @date 26/07/24
 */


const getData = async(url, params = {}) => {

    try{
        const searchParams = new URLSearchParams();
        Object.keys(params).forEach(key => {
            searchParams.append(key, params[key])
        });

        const response = await fetch(`${url}?${searchParams}`);

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