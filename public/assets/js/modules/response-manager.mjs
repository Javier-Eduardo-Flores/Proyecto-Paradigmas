import { getData } from "./fetch.mjs";
import { box } from "./dom-box.mjs";
/**
 * La idea de este metodo es que reciba la informacion y la imprima en boxes separados
 * @author Machigua
 */
const formattedResponse = async (consulta) => {

    if (consulta === "estudiantes"){
        const estudiantes = await getData("/assets/api/PHP/estudiantes.php");

        const nombres = estudiantes.Estudiantes.map(estudiante => box( "rgba(255, 0, 0, 1)","rgba(255, 255, 255, 1)", estudiante.Nombre+"<br>"+estudiante.Cuenta));
        
        return nombres.join("");
    }

};

export{
    formattedResponse
};