import {init,h,p,b,print,printAsAppend,getData,formattedIndividualResponse,createTabla, box} from "./modules/dom.mjs";
init();
/*

Por el momento este main es mas que nada un sandbox para probar las funciones y
sus salidas, favor disculpar.
    -Machigua

*/
// const respuesta = await formattedIndividualResponse("profesores");

// print(respuesta);

const estudiantesTabla = await createTabla("estudiantes");
const profesoresTabla = await createTabla("profesores");
const asignaturasTabla = await createTabla("asignaturas");


printAsAppend (estudiantesTabla);
print("<br>");
printAsAppend (profesoresTabla);
print("<br>");
printAsAppend (asignaturasTabla);