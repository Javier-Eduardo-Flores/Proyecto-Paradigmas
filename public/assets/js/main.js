import { tag, tagOO } from "./modules/dom-basic-html.mjs";
import {init,h,p,b,print,printAsAppend,getData,formattedIndividualResponse,
    createTabla, box,menu,renderMenuSuperior,renderMenuLateral,renderCentroPagina} from "./modules/dom.mjs";
init();
/*

Por el momento este main es mas que nada un sandbox para probar las funciones y
sus salidas, favor disculpar.
    -Machigua

*/
// const respuesta = await formattedIndividualResponse("profesores");

// print(respuesta);


//Resets de estilos

document.body.style.padding = 0;
document.body.style.margin = 0;


 
printAsAppend(renderMenuSuperior());
printAsAppend(renderMenuLateral());
printAsAppend(renderCentroPagina());

