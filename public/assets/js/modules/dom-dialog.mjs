/**
 * NO OLVIDAR PONER LA FIRMA DEL INGENIERO
 * 
 */

const dialog = (id, buttonText = "My Button",
    color="",backgroundColor="",fontFamily="",fontSize="",
    width="auto",height="auto", modalBackgroundColor="#CC8B86") => 
        
    {
    const button = document.createElement("button");
    button.style.color = color;
    button.style.backgroundColor = backgroundColor;
    button.style.fontFamily = fontFamily;
    button.style.fontSize = fontSize;


    button.command = "show-modal";
    button.textContent = buttonText;
    button.setAttribute("commandFor", id);

    const closeBtn = document.createElement("button");
    closeBtn.command = "close";
    closeBtn.setAttribute("commandFor", id);
    closeBtn.textContent = "Cerrar";

    const modal = document.createElement("dialog");
    modal.id = id;
    modal.style.backgroundColor = modalBackgroundColor;
    modal.style.border = "2px solid white";
    modal.style.borderRadius = "10px";
    modal.style.padding = "20px";
    
    modal.style.width = "50vw";
    modal.style.height = "50vh";
    modal.style.overflow = "auto";
    modal.appendChild(closeBtn);

    return [button, modal];

};

export 
{
    dialog
    
};