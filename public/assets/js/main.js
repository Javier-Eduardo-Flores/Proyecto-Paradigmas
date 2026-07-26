import { tag, tagOO } from "./modules/dom-basic-html.mjs";
import {init,h,p,b,print,printAsAppend,getData,formattedIndividualResponse,
    createTabla, box,menu,renderMenuSuperior,renderMenuLateral,renderCentroPagina, stats} from "./modules/dom.mjs";
init();
/*

Por el momento este main es mas que nada un sandbox para probar las funciones y
sus salidas, favor disculpar.
    -Machigua

*/
//Resets de estilos


document.body.style.padding = 0;
document.body.style.margin = 0;

const menuLateral = renderMenuLateral();
const menuBotones = await menu();
menuLateral.appendChild(menuBotones);

const centroPagina = renderCentroPagina();
const topEstudiantes = await stats("topGlobales");
const topAsignaturas = await stats("topAsignaturas");
centroPagina.appendChild(topEstudiantes);
centroPagina.appendChild(topAsignaturas);

printAsAppend(renderMenuSuperior());
printAsAppend(menuLateral);
printAsAppend(centroPagina);

