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

const filaTabla = (data, campoId, filaOnClick = null) => {
    let content = Object.values(data).map
    (
        item =>
        `<td style= "border:2px solid black">${item}</td>`
    )
    .join("");
    
    let fila = tagOO("tr",content,"black","#FFF");

    fila.dataset.id = data[campoId];

    if (filaOnClick){
    
        fila.onclick = () =>filaOnClick(data[campoId], campoId);    
    
    }
    

    return fila;
}
 
const encabezadoTabla = (data)=> {
    let content = Object.keys(data[0]).map(item=>`<th style= "border:5px solid black">${item}</th>`).join("");
    return tagOO("tr",content,"black","#FFF");
}

/**
 * Funcion encargada de crear los dialogs de las "subconsultas"
 * (por ejemplo, mostrar las clases cursadas de un alumno, los alumnos de un profesor, etc).
 * @author carlos.machigua@unah.hn
 * @date 24/07/26
 */

const createTabla = async (consulta, filaOnClick = null)=>{
    
    const endpoints =
    {
        estudiantes: "/assets/api/PHP/estudiantes.php",
        profesores: "/assets/api/PHP/profesores.php",
        asignaturas: "/assets/api/PHP/asignaturas.php"
    };

    const campos = 
    {
        estudiantes: "Cuenta",
        profesores: "DNI",
        asignaturas: "Codigo"
    };

    const respuesta = await getData(endpoints[consulta]);
    const datos = Object.values(respuesta)[0];
    
    let tabla = tagOO("table","");
    let contenido = document.createElement("div");
    
    tabla.appendChild(encabezadoTabla(datos));
    
    datos.forEach(fila => {
        tabla.appendChild(filaTabla(fila, campos[consulta], filaOnClick))
    });
    
    return tabla;
}

export {
    createTabla,
    encabezadoTabla,
    filaTabla
}


