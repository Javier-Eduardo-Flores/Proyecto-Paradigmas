/**
 * @author : flores.javier@unah.hn
 * @date : 19-07-2026
 * 
 * Modificado para adaptarse al contenido que devuelve el backend
 * (un JSON de Objetos), y para generarse de manera asincrona con fetch.
 * @mod : carlos.machigua@unah.hn
 * @date: 19/07/26
 */
import { tagOO } from "./dom-basic-html.mjs";
import { getData } from "./fetch.mjs";

const filaTabla = (data) => {
    let content = Object.values(data).map(item=>`<td style= "border:5px solid black" >${item}</td>`).join("");
    return tagOO("tr",content,"black","#FFF");
}
 
const encabezadoTabla = (data)=> {
    let content = Object.keys(data[0]).map(item=>`<th style= "border:5px solid black">${item}</th>`).join("");
    return tagOO("tr",content,"black","#FFF");
}

const createTabla = async (consulta)=>{
    
    const endpoints ={
        estudiantes: "/assets/api/PHP/estudiantes.php",
        profesores: "/assets/api/PHP/profesores.php",
        asignaturas: "/assets/api/PHP/asignaturas.php"
    };

    const respuesta = await getData(endpoints[consulta]);
    const datos = Object.values(respuesta)[0];
    
    let tabla = tagOO("table","");
    let contenido = document.createElement("div");
    
    tabla.appendChild(encabezadoTabla(datos));
    
    datos.forEach(fila => {
        tabla.appendChild(filaTabla(fila))
    });
    
    return tabla;
}

export {
    createTabla
}


