import { box, printAsAppend } from "./modules/dom.mjs";


import { getData } from "./modules/fetch.mjs";

const cargarSecciones = async () => {
    const secciones = await getData("/assets/api/PHP/seccionesDisponibles.php");

    console.log(secciones);
};

cargarSecciones();