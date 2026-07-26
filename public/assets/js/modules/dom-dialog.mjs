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
    button.style.cursor = "pointer";


    button.command = "show-modal";
    button.textContent = buttonText;
    button.setAttribute("commandFor", id);

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

    closeBtn.command = "close";
    closeBtn.setAttribute("commandFor", id);
    closeBtn.appendChild(closeIco);

    const modal = document.createElement("dialog");
    modal.id = id;
    modal.style.backgroundColor = modalBackgroundColor;
    modal.style.border = "2px solid white";
    modal.style.borderRadius = "10px";
    modal.style.padding = "20px";
    
    modal.style.width = "50vw";
    modal.style.height = "50vh";
    modal.style.paddingTop = "40px";
    modal.style.maxHeight = "80vh";
    modal.style.overflow = "auto";



    modal.appendChild(closeBtn);

    return [button, modal];

};

export 
{
    dialog
    
};