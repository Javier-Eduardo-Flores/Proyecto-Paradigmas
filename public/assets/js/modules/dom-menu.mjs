/**
 * @author : flores.javier@unah.hn
 * @date : 20-07-2026
 * 
 * */

import {cajaFlexible} from "./dom-box.mjs"
import { tag, tagOO } from "./dom-basic-html.mjs";
import { buttonDemoMessage } from "./dom-events.mjs";
import { createTabla } from "./dom-tabla.mjs";


/**
 * Version modificada del metodo que hizo el ingeniero para traer los datos asincronamente
 *  
 * (es mayormente hecha por Machigua, asi que no se xd)
 * 
 * NO OLVIDAR PONER LA FIRMA DEL INGE
 */



const infoGetter = async(clickEvent, consulta) => {
    
    let dialog = document.createElement("dialog");
    
    dialog.style.backgroundColor = "#CC8B86";
    dialog.style.border = "2px solid white";
    dialog.style.borderRadius = "10px";
    dialog.style.padding = "20px";
    
    dialog.style.width = "50vw";
    dialog.style.height = "50vh";
    dialog.style.overflow = "auto";
    
    let close = document.createElement("button");

    close.textContent = "Cerrar";
    close.onclick = () => {
        dialog.close();
        dialog.remove();
    };

    dialog.innerHTML = "";
    dialog.appendChild(await createTabla(consulta));
    document.body.appendChild(dialog);
    dialog.appendChild(close);
    dialog.showModal();
    dialog.scrollTop = 0;
   
};

const menu = ()=> {
let header = cajaFlexible("header","100%","50px","fixed");  
let item1 = buttonDemoMessage("Estudiantes","","#F3EFE0","#1A659E","sans-serif","16px","100px", "100px", (clickEvent) => infoGetter(clickEvent, "estudiantes"));
let item2 = buttonDemoMessage("Profesores","","#F3EFE0","#1A659E","sans-serif","16px","100px", "100px", (clickEvent) => infoGetter(clickEvent, "profesores"));
let item3 = buttonDemoMessage("Asignaturas","","#F3EFE0","#1A659E","sans-serif","16px","100px", "100px", (clickEvent) => infoGetter(clickEvent, "asignaturas"));

header.appendChild(item1);
header.appendChild(item2);
header.appendChild(item3);
return header;
}

export {
    menu
}