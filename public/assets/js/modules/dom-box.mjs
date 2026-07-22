/**
 * @author jose.inestroza@unah.edu.hn
 * @author flores.javier@unah.hn
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

/**
 * @author : flores.javier@unah.hn
 * @date : 20-07-2026
 * 
 * */
const cajaFlexible = (name="div",width="400px",height="100px",position="relative",backgroundColor="#1F2937",color="#F3EFE0",gap="10px")=>{
    let obj = document.createElement(name);
    obj.style.width = width;
    obj.style.height = height;
    obj.style.position = position;
    obj.style.backgroundColor = backgroundColor;
    obj.style.display = "flex";
    obj.style.color = color;
    obj.style.gap = gap;
    obj.style.flexWrap = "wrap";
    obj.style.padding = "5px 10px";
    obj.style.justifyContent = "space-around";
    return obj;
}

export{
    box,cajaFlexible
};