/**
 * DOM BASIC HTML
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 */

const placeholder = (name) =>{
    if(name ===`h1`) return "Titulo"
    return "Placeholder";
}

const tag = (name, content = `${placeholder(name)} content ${name}`, style ="") => {
    return `<${name} ${style}> ${content} </${name}>`;
};


const tagOO = (name,content=`${placeholder(name)} content ${name}`,
    color="black",backgroundColor="white",fontFamily="monospace",fontSize="12px",width="auto",height="auto")=>{
    let obj = document.createElement(name);
    obj.style.color = color;
    obj.style.backgroundColor = backgroundColor;
    obj.style.fontFamily = fontFamily;
    obj.style.fontSize = fontSize;
    obj.style.width = width;
    obj.style.height = height;
    obj.innerHTML = content;
    return obj;
}

const h = (content) => tag("h1", content);
const p = (content) => tag("p", content);
const b = (content) => tag("strong", content);

export{
    h,
    p,
    b, 
    tag,tagOO
}