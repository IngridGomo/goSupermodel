//Javascript for header/navbar

// target for å opprette navbar i html.
const headertarget = document.querySelector("#js-header");
createNavbar(headertarget);


function createNavbar(targetElement) {
    createModElement("nav", targetElement, "", "", ["id", "js-navbar"]);

    const navbar = document.querySelector("#js-navbar");
    createModElement("a", navbar, "", "index.html", ["id", "js-header-logo"]);

    const logo = document.querySelector("#js-header-logo");
    createModElement("img", logo, "", "", [["src", "img/pareto_logo.png"], ["id", "js-header-logoimg"], ["alt", "Pareto-logo"]]);
    createModElement("ul", navbar, "", "", ["id", "js-header-ul"]);

    for (i = 0; i < 5; i++) {
        createModElement("li", document.querySelector("#js-header-ul"), "", "", ["class", "js-header-li"]);
    }

    const lielements = document.getElementsByClassName("js-header-li");
    /* createModElement("a", lielements[0], "Om Pareto", "om_pareto.html", [["class", "js-header-link"], "id", "js-dropdown"]); */
    createModElement("div",lielements[0],"","",[["class","dropdown"],["id","js-dropcontainer"]]);
    createModElement("a",document.getElementById("js-dropcontainer"),"Om oss ▼","",[["onclick","dropdownFunction()"],["class","dropdownButton js-header-link"],["id","dropdownOmOss"]])
    createModElement("div",document.getElementById("js-dropcontainer"),"","",[["id","Dropdown"],["class","dropdownItems"]])
    createModElement("a",document.getElementById("Dropdown"),"Om Pareto","om_pareto.html",["class","js-header-link"])
    createModElement("a",document.getElementById("Dropdown"),"Komiteer","komiteer.html",["class","js-header-link"])
    createModElement("a",document.getElementById("Dropdown"),"Styret","styret.html",["class","js-header-link"])
    createModElement("a",document.getElementById("Dropdown"),"Vedtekter","vedtekter.html",["class","js-header-link"])

    // virker som at dette er linkene til fanene liksom
    // Nå setter jeg det som hovedfanene på gsm
    createModElement("a", lielements[1], "Forside", "gsm_forside.html", ["class", "js-header-link"]);
    createModElement("a", lielements[2], "Shopping", "gsm_shopping.html", ["class", "js-header-link"]);
    createModElement("a", lielements[3], "Spill", "gsm_spill.html", ["class", "js-header-link"]);
    createModElement("a", lielements[4], "Forum", "gsm_forum.html", ["class", "js-header-link"]);

    // Oppretter knapp og img-element for rollup.js
    createModElement("button",navbar,"","",[["id","js-scrollup"],["title","Gå til toppen"]]); /* !Button for scrollup! */
    createModElement("img",document.getElementById("js-scrollup"),"","",[["src","img/scrollupikon.jpg"],["alt","scrollicon"],["width","50"],["height","50"]]);

    // Oppretter knapp som viser/gjemmer navbar for mobil. 
    createModElement("a",navbar,"","#",["id","js-menyknapp"]);
    createModElement("img",document.getElementById("js-menyknapp"),"","",[["id","js-menysvg"],["src","img/ico/menyknapp.svg"],["alt","Menyknapp"],["width","48"],["height","48"],["type","image/svg+xml"]])
}


// eleattr = enten et array med ["attribute","verdi"] eller matrise [["attribute","verdi"],["attribute","verdi"], ..., ...]
function createModElement(tagName, target, content = "", url = "", eleattr = "") {
    const node = document.createElement(tagName);
    const textnode = document.createTextNode(content);
    node.appendChild(textnode);
    if (url !== "") {
        node.setAttribute("href", url);
    }
    if (Array.isArray(eleattr)) {
        if (Array.isArray(eleattr[0])) {
            for (i = 0; i < eleattr.length; i++) {
                node.setAttribute(eleattr[i][0], eleattr[i][1]);
            }
        }
        else {
            node.setAttribute(eleattr[0], eleattr[1]);
        }
    }
    target.appendChild(node);
}