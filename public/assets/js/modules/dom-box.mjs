/**
 * @author jose.inestroza@unah.edu.hn
 * @author flores.javier@unah.hn
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 */

import { tagOO } from "./dom-basic-html.mjs";


const box = (colorFg, colorBg, content= `Placeholder Content`) =>{
    let obj = document.createElement("div");
    obj.style.color = colorFg;
    obj.style.backgroundColor = colorBg;
    obj.style.fontFamily = "monospace";
    obj.style.fontSize = "16px";
    obj.style.border = `solid 2px ${colorFg}`;
    obj.style.borderRadius = "3px";
    obj.style.padding = "12px";
    obj.style.margin = "5px";
    obj.style.overflow = "auto"
    obj.style.width = "auto";
    obj.style.height = "50vh";
    obj.innerHTML = content;
    
    return obj;
};

/**
 * @author : flores.javier@unah.hn
 * @date : 20-07-2026
 * 
 * */
const cajaFlexible = (name="div",width="400px",height="100px",position="relative",backgroundColor="#1F2937",color="#F3EFE0",gap="10px")=>{
    let obj = document.createElement(name);
    obj.style.width = width;
    obj.style.height = height;
    obj.style.position = position;
    obj.style.backgroundColor = backgroundColor;
    obj.style.display = "flex";
    obj.style.color = color;
    obj.style.gap = gap;
    obj.style.flexWrap = "wrap";
    obj.style.padding = "5px 10px";
    obj.style.justifyContent = "space-around";
    return obj;
}


/**
 * @author jose.inestroza@unah.edu.hn
 * @author flores.javier@unah.hn
 * @version 0.1.1
 * @date 26/07/22
 * @since 26/07/22
 * MetodO column que se vio en clase con modificaciones
 */


const boxPosicional = (opt = {"left":0},position="fixed",width="50vw",height="100vh",
    color="#F3EFE0",backgroundColor="#1A659E",fontFamily="sans-serif") => {
	
    const div = tagOO("div","",color,backgroundColor,fontFamily);
	div.style.position = position;
	div.style.top = "0px";

	div.style.width = width;
	div.style.height= height;
	
	div.style.overflowX = "hidden";
	div.style.overflowY = "auto"; 
	Object.assign(div.style, opt);
	return div;
}
const menuSuperior = boxPosicional({"left":0},"fixed","100vw","70px");

const menuLateral = boxPosicional({"right":0},"absolute","18vw","100vh","#F3EFE0","#111827");

const centroPagina = boxPosicional({"left":0, "display":"flex","flexWrap": "wrap","top":"70px","gap":"20px"}, "absolute" ,"82vw","100vh","#111827","#F9FAFB");



export{
    box,cajaFlexible,menuLateral,centroPagina,menuSuperior
};