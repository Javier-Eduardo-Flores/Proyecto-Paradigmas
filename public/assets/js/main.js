import { tag, tagOO } from "./modules/dom-basic-html.mjs";
import {init,h,p,b,print,printAsAppend,getData,formattedIndividualResponse,createTabla, box,menu} from "./modules/dom.mjs";
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

const estudiantesTabla = await createTabla("estudiantes");
// const profesoresTabla = await createTabla("profesores");
// const asignaturasTabla = await createTabla("asignaturas");

 printAsAppend(menu());
// printAsAppend (estudiantesTabla);
// print("<br>");
// printAsAppend (profesoresTabla);
// print("<br>");
// printAsAppend (asignaturasTabla);
