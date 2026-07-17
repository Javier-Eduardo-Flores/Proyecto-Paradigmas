import {init,h,p,b,print,printAsAppend,getData,formattedResponse} from "./modules/dom.mjs";

const respuesta = await formattedResponse("estudiantes");
init();

print(respuesta);
