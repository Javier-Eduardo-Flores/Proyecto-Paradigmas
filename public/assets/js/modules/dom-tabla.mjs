/**
 * @author : flores.javier@unah.hn
 * @date : 19-07-2026
 * 
 */
import {tagOO} from "./dom-basic-html.mjs";

const filaTabla = (data)=>{
    let content = data.map(item=>`<td>${item}</td>`).join("");
    return tagOO("tr",content,"black","#FFF","sans-serif");
}
 
const encabezadoTabla = (data)=> {
    let content = data.map(item=>`<th>${item}</th>`).join("");
    return tagOO("tr",content,"black","#797272","sans-serif");
}

const createTabla = (dataEncabezado,dataFilas)=>{
    let tabla = tagOO("table");
    let dataFila = Object.values(dataFilas);
    tabla.appendChild(encabezadoTabla(dataEncabezado));
    tabla.appendChild(filaTablaTabla(dataFilas));
    return tabla;
}

export {
    
}


