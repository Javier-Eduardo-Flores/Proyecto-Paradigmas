/**
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 */


const box = (colorFg, colorBg, content= `Placeholder Content`) =>{
    let obj = document.createElement("div");
    obj.style.color = colorFg;
    obj.style.backgroundColor = colorBg;
    obj.style.fontFamily = "monospace";
    obj.style.fontSize = "16px";
    obj.style.border = `solid 2px ${colorFg}`;
    obj.style.borderRadius = "3px";
    obj.style.padding = "12px";
    obj.style.margin = "90px";
    obj.style.width = "max-content";
    obj.innerHTML = content;
    
    return obj.outerHTML;
};

export{
    box
};