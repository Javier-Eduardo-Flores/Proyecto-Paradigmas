/**
 * @author : flores.javier@unah.hn
 * @date : 20-07-2026
 * 
 * */

import {cajaFlexible} from "./dom-box.mjs"
import { tag, tagOO } from "./dom-basic-html.mjs";
import { buttonDemoMessage } from "./dom-events.mjs";
import { createTabla, encabezadoTabla, filaTabla } from "./dom-tabla.mjs";
import { dialog } from "./dom-dialog.mjs";
import { getData } from "./fetch.mjs";
import { box } from "./dom-box.mjs";
import { p, h } from "./dom-basic-html.mjs";
import { printAsAppend } from "./dom.mjs";

import { menuSuperior,menuLateral,centroPagina } from "./dom-box.mjs";
import { tagDinamico } from "./dom-basic-html.mjs";

/**
 * @author jose.inestroza@unah.edu.hn
 * @author Machigua
 * @version 0.1.1
 * @date 25/06/2026
 */


const mostrarSubConsulta = async( parameter, key, data) => {
    const consultas = 
    { 
        Cuenta: "/assets/api/PHP/clasesEstudiante.php", 
        DNI: "/assets/api/PHP/alumnosProfesor.php" 
    }; 
    const response = await getData(consultas[key], {[key]: parameter});
    const modal = document.createElement("dialog");

    const datos = Object.values(response)[0];
     /**
     * Ordena las calificaciones de las asignaturas del alumno de manera descendente 
     * utilizando el método Array.prototype.sort() 
     * 
     * Basado en el ejemplo de MDN:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * 
     */
    if ("Calificacion" in datos[0]) {
        datos.sort((a, b) => Number(b.Calificacion) - Number(a.Calificacion));
        let titulo = document.createElement("h3");
        titulo.innerHTML = "Calificaciones del alumno(a): "+data.Nombre;
        modal.appendChild(titulo);
    } else if ("Correo" in datos[0]) {
        datos.sort((a, b) => Number(b.Calificacion) - Number(a.Calificacion));
        let titulo = document.createElement("h3");
        titulo.innerHTML = "Alumnos(as) del catedratico(a): "+data.Nombre;
        modal.appendChild(titulo);
    }

    let tabla = tagOO("table","")
    tabla.appendChild(encabezadoTabla(datos));

    datos.forEach(fila => {
        tabla.appendChild(filaTabla(fila));

        
    });
    
    modal.appendChild(tabla);
    modal.style.position = "relative";
    modal.style.paddingTop = "40px";
    modal.style.width = "30vw";
    modal.style.maxHeight = "80vh";
    modal.style.overflow = "auto";

    const closeBtn = document.createElement("button");
    const closeIco = document.createElement("img");
   
    closeIco.src = "/assets/img/close.png";
    closeIco.width = 24;
    closeIco.height = 24;

    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.padding = "0";
    closeBtn.style.margin = "0";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.outline = "none";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.left = "10px";

    closeBtn.onclick = () => {
        modal.close();
        modal.remove();
    };
    closeBtn.appendChild(closeIco);
    modal.appendChild(closeBtn);

    printAsAppend(modal);
    modal.showModal();
};
const infoGetter = async(modal, consulta) => 
    {
    const tabla = await createTabla(consulta, mostrarSubConsulta);
    modal.appendChild(tabla);

    };

const clearAction = async () =>{
    const datos = await getData("/assets/api/PHP/db_clearing.php");
    const respuesta = datos.Respaldo;
    const modal = document.createElement("dialog");

    const successMessage = 
        box(

            "white", 
            "green", 
            (
                h("La base de conocimientos fue limpiada correctamente. <br>") + 
                p("El registro de guardado se encuentra en: " + respuesta)   
            )
        
        );
    modal.appendChild(successMessage);

    const close = document.createElement("button");
    close.textContent = "Cerrar";

    close.onclick = () => {
        modal.close();
        modal.remove();
    };
    modal.appendChild(close);

    printAsAppend(modal);
    modal.showModal();
}



const renderMenuSuperior = ()=>{
let header = menuSuperior;
header.style.zIndex = 100;
let logo = tagOO("div","","#0a0606","","sans-serif","16px","100px","100px");
logo.style.position = "absolute";
logo.style.top = "-1px";
logo.style.left = "10px"
logo.style.textAlign = "center";

const imagen = document.createElement("img");

imagen.src = "./assets/img/logo.png";
imagen.style.width = "80px";
imagen.style.height = "80px";
imagen.style.objectFit = "contain";
imagen.style.display = "block";
imagen.style.margin = "auto";

logo.appendChild(imagen);


let titulo = tagDinamico("h2",
    {"color":"#F3EFE0",
        "font-size":"30px",
        "position":"absolute",
        "width":"auto",
        "height":"60px",
        "padding":0,
        "margin":0,
        "justify-content":"center",
        "text-align":"center",
        "line-height":"60px",
        "left":"30vw",
        "font-weight":"bold",
        "top":0
    });

titulo.innerHTML = "Proyecto Paradigmas de Programacion";

    let [AcercaDe, aboutModal] = dialog("dialog-acercade","Acerca De","#F3EFE0","#CC8B86","sans-serif","16px","100px", "40px");

    
    AcercaDe.style.position = "absolute";
    AcercaDe.style.right = "12px";
    AcercaDe.style.textAlign = "center";
    AcercaDe.style.borderRadius = "6px";
    AcercaDe.style.padding = "4px";
    AcercaDe.style.top = "10px";
    AcercaDe.style.border = "1px solid black";
    AcercaDe.style.cursor = "pointer";
    aboutModal.style.width = "70vw";
    aboutModal.style.height = "70vh";
    aboutModal.style.overflow = "auto";
    aboutModal.appendChild(
        box
        (
            "white", "rgba(0, 124, 155, 1)", 
            `
            <h2>Acerca De</h2>

                <p>
                    Este sistema fue desarrollado siguiendo principalmente el 
                    <b>paradigma funcional</b>, buscando mantener una separación clara
                    de responsabilidades entre los diferentes componentes.
                </p>

                <h3>Arquitectura del Sistema</h3>

                <p>
                    La aplicación está dividida en tres capas principales:
                </p>

                <ul>
                    <li>
                        <b>Frontend:</b> desarrollado con JavaScript mediante módulos ES (.mjs),
                        encargado de la creación dinámica de interfaces, manejo de eventos y
                        comunicación con los servicios del sistema.
                    </li>

                    <li>
                        <b>Backend:</b> implementado en PHP mediante endpoints independientes,
                        funcionando como intermediario entre la interfaz y la base de conocimientos.
                    </li>

                    <li>
                        <b>Base de conocimientos:</b> desarrollada en Prolog utilizando hechos y
                        reglas para realizar consultas e inferir información académica.
                    </li>
                </ul>

                <h3>Tecnologías utilizadas</h3>

                <ul>
                    <li>
                        <b>JavaScript:</b> desarrollo de la interfaz, manipulación del DOM,
                        generación dinámica de componentes y consumo de APIs.
                    </li>

                    <li>
                        <b>PHP:</b> creación de servicios y comunicación entre el sistema
                        y Prolog mediante endpoints.
                    </li>

                    <li>
                        <b>Prolog:</b> almacenamiento de hechos, reglas y consultas sobre
                        la información académica.
                    </li>

                    <li>
                        <b>Python:</b> utilizado como herramienta auxiliar para procesamiento
                        de información y apoyo en la comunicación con otros componentes.
                    </li>
                </ul>

                <h3>Sistema de Consultas</h3>

                <p>
                    El sistema permite consultar información académica mediante reglas
                    implementadas en Prolog. Las consultas son ejecutadas desde PHP y
                    transformadas a formato JSON para ser utilizadas por el frontend.
                </p>

                <p>
                    Entre las funcionalidades disponibles se encuentran:
                </p>

                <ul>
                    <li>Consulta de estudiantes, profesores y asignaturas.</li>
                    <li>Consulta de clases asociadas a estudiantes.</li>
                    <li>Consulta de estudiantes pertenecientes a una clase.</li>
                    <li>Obtención de promedios y estadísticas académicas.</li>
                </ul>

                <h3>Interfaz Dinámica</h3>

                <p>
                    La interfaz fue construida mediante manipulación directa del DOM,
                    utilizando módulos reutilizables para:
                </p>

                <ul>
                    <li>Creación de tablas dinámicas.</li>
                    <li>Generación de ventanas modales.</li>
                    <li>Manejo de eventos.</li>
                    <li>Consumo de servicios mediante peticiones asíncronas.</li>
                </ul>

                <h3>Estadísticas del Sistema</h3>

                <p>
                    Se implementó un módulo de estadísticas que permite visualizar
                    información relevante obtenida desde la base de conocimientos, como:
                </p>

                <ul>
                    <li>Mejores promedios de la carrera.</li>
                    <li>Asignaturas con mayor cantidad de estudiantes.</li>
                    <li>Información académica derivada mediante reglas de Prolog.</li>
                </ul>

                <p>
                    El diseño del sistema busca mantener una arquitectura modular,
                    facilitar el mantenimiento del código y permitir la ampliación de
                    nuevas funcionalidades.
                </p>


           `
        )
    );

    let [autorsBtn, autorsModal] = dialog("dialog-autors","Autores","#F3EFE0","#000000ff","sans-serif","16px","100px", "40px"); 
    autorsBtn.style.position = "absolute";
    autorsBtn.style.right = "100px";
    autorsBtn.style.textAlign = "center";
    autorsBtn.style.borderRadius = "6px";
    autorsBtn.style.padding = "4px";
    autorsBtn.style.top = "10px";
    autorsBtn.style.border = "1px solid black";
    autorsBtn.style.cursor = "pointer";
    
    autorsModal.style.width = "45vw";
    autorsModal.style.height = "50vh";
    autorsModal.style.overflow = "auto";

    let autores = [
    {
        nombre: "Carlos Manuel Machigua Espinal",
        cuenta: "20231003060",
        correo: "carlos.machigua@unah.hn",
        rol: "Desarrollador Backend y Frontend"
    },
    {
        nombre: "Javier Eduardo Flores Valladares",
        cuenta: "20221002840",
        correo: "flores.javier@unah.hn",
        rol: "Desarrollador de Prolog y Frontend"
    }
];
    autores.forEach(autor =>
        {
            let tarjeta = box
            (
                "#F3EFE0",
                "#1A659E",
                `
                <h3>${autor.nombre}</h3>
                <p><b>Cuenta:</b> ${autor.cuenta}</p>
                <p><b>Correo:</b> ${autor.correo}</p>
                <p><b>Rol:</b> ${autor.rol}</p>
                `
            );

            tarjeta.style.width = "30vw";
            tarjeta.style.height = "15vw";
            tarjeta.style.margin = "15px auto";
            tarjeta.style.padding = "10px";
            tarjeta.style.borderRadius = "10px";

            autorsModal.appendChild(tarjeta);
        }
    );
    

    header.appendChild(logo);
    header.appendChild(titulo);
    header.appendChild(AcercaDe);
    header.appendChild(aboutModal);

    header.appendChild(autorsModal);
    header.appendChild(autorsBtn);


    return header;
    }


const renderMenuLateral = ()=>{
    let lateral = menuLateral;
    return lateral;
}


const renderCentroPagina = ()=>{
    let centro = centroPagina;
    return centroPagina;
}

const menu = async () => {
let header = cajaFlexible("header","100%","50vh"); 
header.style.display = "block";
const [button1, modal1] = dialog("dialog-estudiantes","Estudiantes","#F3EFE0","#1A659E","sans-serif","35px","100px", "100px");
await infoGetter(modal1, "estudiantes");

const [button2, modal2] = dialog("dialog-profesores","Profesores","#F3EFE0","#1A659E","sans-serif","35px","100px", "100px");
await infoGetter(modal2, "profesores");

const [button3, modal3] = dialog("dialog-asignaturas","Asignaturas","#F3EFE0","#1A659E","sans-serif","35px","100px", "100px");
await infoGetter(modal3, "asignaturas");

const clearBtn = buttonDemoMessage("Limpiar Base de Conocimientos","","#F3EFE0","#ff0000ff","sans-serif","35px","100px", "100px", async() => await clearAction());

const availableSections = buttonDemoMessage("Generar Secciones disponibles","","#F3EFE0","#70c45fff","sans-serif","35px","100px", "100px", () => goToHorarios());

button1.style.display = "block";
button1.style.margin = "80px auto";

button2.style.display = "block";
button2.style.margin = "80px auto";

button3.style.display = "block";
button3.style.margin = "80px auto";

clearBtn.style.display = "block";
clearBtn.style.margin = "80px auto";

availableSections.style.display = "block";
availableSections.style.margin = "80px auto";

header.appendChild(button1);
header.appendChild(modal1);

header.appendChild(button2);
header.appendChild(modal2);

header.appendChild(button3);
header.appendChild(modal3);

header.appendChild(clearBtn);

header.appendChild(availableSections);

return header;
}

const stats = async (consulta) =>{
    const titulos =
    {
        topGlobales: "<b>Mejores Promedios de la Carrera</b>",
        topAsignaturas: "<b>Asignaturas de la Carrera con mas estudiantes</b>"
    };
    let tabla = await createTabla(consulta);
    let div = box("#F3EFE0", "#CC8B86", titulos[consulta]);
    div.appendChild(tabla);
    
    return div;
};

export {
    menu,renderMenuSuperior, renderMenuLateral, renderCentroPagina, stats
}

const goToHorarios = () => {
    window.location.href = "./horarios.html"
};