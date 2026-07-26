/**
 * Dynamic Button Creator
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.0
 * @date 26/07/20
 * @since 26/07/20
 * 
 * Modificacion para anadir la capacidad de agregarle estilos 
 * a dichos botones.
 * @author: carlos.machigua@unah.hn
 * @date: 20/07/26
 * 
 */

const buttonDemoMessage = (text = "Prueba", message = "", color="",backgroundColor="",fontFamily="",fontSize="",
    width="auto",height="auto", action = () => {} ) =>{
    const element = document.createElement("button");
    element.textContent = text;
    // element.dataset.message = message;
    element.style.color = color;
    element.style.backgroundColor = backgroundColor;
    element.style.fontFamily = fontFamily;
    element.style.fontSize = fontSize;
    element.style.cursor = "pointer";
    element.onclick = action;
    
    return element;
}

export {buttonDemoMessage};
