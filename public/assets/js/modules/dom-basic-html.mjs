/**
 * DOM: Document Object Model
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

const h = (content) => tag("h1", content);
const p = (content) => tag("p", content);
const b = (content) => tag("strong", content);

export{
    h,
    p,
    b
}