/**
 * DOM: Document Object Model
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.2
 * @date 26/07/17
 * @since 26/06/25
 * 
 */

import { h,p,b } from "./dom-basic-html.mjs";
import { getData } from "./fetch.mjs";
import { formattedIndividualResponse } from "./response-manager.mjs";
import { createTabla } from "./dom-tabla.mjs";
import { box } from "./dom-box.mjs";
import { menu } from "./dom-menu.mjs";
import { buttonDemoMessage } from "./dom-events.mjs";

const init = () =>{
    document.body.style.backgroundColor = `	#1F2937`;
    document.body.style.color = `#F3EFE0`;
    document.body.style.fontSize = `24px`;
    document.body.style.fontFamily = `monospace`;
};

const print = (content) => {
    document.body.innerHTML += content;
};

const printAsAppend = (content) => {
    document.body.appendChild(content);
};

export{
    init,
    h,p,b,
    print,
    printAsAppend,
    getData,
    formattedIndividualResponse, 
    createTabla,
    box,menu,
    buttonDemoMessage
};