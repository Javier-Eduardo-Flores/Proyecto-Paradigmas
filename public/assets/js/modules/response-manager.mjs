import { getData } from "./fetch.mjs";
import { box } from "./dom-box.mjs";
/**
 * La idea de este metodo es que reciba la informacion y la imprima en boxes separados
 * @author Machigua
 */
const formattedIndividualResponse = async (consulta) => {

    if (consulta === "estudiantes"){
        const estudiantes = await getData("/assets/api/PHP/estudiantes.php");

        const nombres = estudiantes.Estudiantes.map(estudiante => box( "rgba(60, 255, 0, 1)","rgba(255, 255, 255, 1)", estudiante.Nombre+"<br>"+estudiante.Cuenta));
        
        return nombres.join("");
    } else if (consulta === "profesores"){
        const profesores = await getData("/assets/api/PHP/profesores.php");

        const nombres = profesores.Profesores.map(profesor => box( "rgba(60, 255, 0, 1)","rgba(255, 255, 255, 1)", profesor.Nombre+"<br>"+profesor.DNI+"<br>"+profesor.Correo));
        
        return nombres.join("");
    } else if (consulta === "asignaturas"){
        const asignaturas = await getData("/assets/api/PHP/asignaturas.php");

        const nombres = asignaturas.Asignaturas.map(asignatura => box( "rgba(60, 255, 0, 1)","rgba(255, 255, 255, 1)", asignatura.Codigo+"<br>"+asignatura.Nombre+"<br>"+asignatura.UV));
        
        return nombres.join("");
    }

};

export{
    formattedIndividualResponse
};