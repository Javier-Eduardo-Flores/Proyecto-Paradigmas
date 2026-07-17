/**
 * DOM: Document Object Model
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.2
 * @date 26/07/17
 * @since 26/06/25
 * 
 */

import {h,p,b} from "./dom-basic-html.mjs";
import {getData} from "./fetch.mjs";
import {formattedResponse} from "./response-manager.mjs";

const init = () =>{
    document.body.style.backgroundColor = `black`;
    document.body.style.color = `white`;
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
    formattedResponse
};