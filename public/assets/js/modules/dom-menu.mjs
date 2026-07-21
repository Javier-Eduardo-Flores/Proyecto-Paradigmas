/**
 * @author : flores.javier@unah.hn
 * @date : 20-07-2026
 * 
 * */

import {cajaFlexible} from "./dom-box.mjs"
import { tagOO } from "./dom-basic-html.mjs";

const menu = ()=> {
let header = cajaFlexible("header","100%","50px","fixed");  
let item1 = tagOO("div","ItemMenu","#F3EFE0","#344050","sans-serif","16px","200px");
let item2 = tagOO("div","ItemMenu","#F3EFE0","#344050","sans-serif","16px","200px");
let item3 = tagOO("div","ItemMenu","#F3EFE0","#344050","sans-serif","16px","200px");

header.appendChild(item1);
header.appendChild(item2);
header.appendChild(item3);
return header;
}

export {
    menu
}