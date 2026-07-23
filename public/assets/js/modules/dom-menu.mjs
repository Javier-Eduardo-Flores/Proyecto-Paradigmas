/**
 * @author : flores.javier@unah.hn
 * @date : 20-07-2026
 * 
 * */

import {cajaFlexible} from "./dom-box.mjs"
import { tag, tagOO } from "./dom-basic-html.mjs";
import { buttonDemoMessage } from "./dom-events.mjs";
import { createTabla } from "./dom-tabla.mjs";
import { dialog } from "./dom-dialog.mjs";
import { getData } from "./fetch.mjs";
import { box } from "./dom-box.mjs";
import { p, h } from "./dom-basic-html.mjs";
import { printAsAppend } from "./dom.mjs";

import { menuSuperior,menuLateral,centroPagina } from "./dom-box.mjs";
import { tagDinamico } from "./dom-basic-html.mjs";

/**
 * Version modificada del metodo que hizo el ingeniero para traer los datos asincronamente
 *  
 * (es mayormente hecha por Machigua, asi que no se xd)
 * 
 * NO OLVIDAR PONER LA FIRMA DEL INGE
 */



const infoGetter = async(modal, consulta) => 
    {
    const tabla = await createTabla(consulta);
    modal.appendChild(tabla);

    };

const clearAction = async () =>{
    const datos = await getData("/assets/api/PHP/db_clearing.php");
    const respuesta = datos.Respaldo;
    const modal = document.createElement("dialog");

    const successMessage = 
        box(

            "white", 
            "green", 
            (
                h("La base de conocimientos fue limpiada correctamente. <br>") + 
                p("El registro de guardado se encuentra en: " + respuesta)   
            )
        
        );
    modal.appendChild(successMessage);

    const close = document.createElement("button");
    close.textContent = "Cerrar";

    close.onclick = () => {
        modal.close();
        modal.remove();
    };
    modal.appendChild(close);

    printAsAppend(modal);
    modal.showModal();
}



const renderMenuSuperior = ()=>{
let header = menuSuperior;
header.style.zIndex = 100;
let logo = tagOO("div","Logo","#0a0606","#666262","sans-serif","16px","100px","40px");
logo.style.position = "absolute";
logo.style.top = "10px";
logo.style.left = "10px"
logo.style.textAlign = "center";
let titulo = tagDinamico("h2",
    {"color":"#F3EFE0",
        "font-size":"30px",
        "position":"absolute",
        "width":"200px",
        "height":"60px",
        "padding":0,
        "margin":0,
        "justify-content":"center",
        "text-align":"center",
        "line-height":"60px",
        "left":"42vw",
        "font-weight":"bold",
        "top":0
    });

titulo.innerHTML = "Titulo Pagina";
let AcercaDe = tagOO("button","Acerca De","#F3EFE0","#CC8B86","sans-serif","16px","100px","40px");
AcercaDe.style.position = "absolute";
AcercaDe.style.right = "12px";
AcercaDe.style.textAlign = "center";
AcercaDe.style.borderRadius = "6px";
AcercaDe.style.padding = "4px";
AcercaDe.style.top = "10px";
AcercaDe.style.border = "1px solid black";
AcercaDe.style.cursor = "pointer";


header.appendChild(logo);
header.appendChild(titulo);
header.appendChild(AcercaDe);

return header;
}


const renderMenuLateral = ()=>{
    let lateral = menuLateral;
    return lateral;
}


const renderCentroPagina = ()=>{
    let centro = centroPagina;
    return centroPagina;
}

const menu = async () => {
let header = cajaFlexible("header","100%","50px","fixed");  
const [button1, modal1] = dialog("dialog-estudiantes","Estudiantes","#F3EFE0","#1A659E","sans-serif","16px","100px", "100px");
await infoGetter(modal1, "estudiantes");

const [button2, modal2] = dialog("dialog-profesores","Profesores","#F3EFE0","#1A659E","sans-serif","16px","100px", "100px");
await infoGetter(modal2, "profesores");

const [button3, modal3] = dialog("dialog-asignaturas","Asignaturas","#F3EFE0","#1A659E","sans-serif","16px","100px", "100px");
await infoGetter(modal3, "asignaturas");

const clearBtn = buttonDemoMessage("Limpiar Base de Conocimientos","","#F3EFE0","#ff0000ff","sans-serif","16px","100px", "100px", async() => await clearAction());

header.appendChild(button1);
header.appendChild(modal1);

header.appendChild(button2);
header.appendChild(modal2);

header.appendChild(button3);
header.appendChild(modal3);

header.appendChild(clearBtn);

return header;
}

export {
    menu,renderMenuSuperior, renderMenuLateral, renderCentroPagina
}