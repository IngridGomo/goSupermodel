const headerTarget = document.getElementById(header);
createNavbar(headerTarget);

function createNavbar(targetElement) {
    createModElement("nav", targetElement, "", "", ["id", "navbar"]);
    const navbar = document.querySelector("#navbar"); //refererer til den over

    createModElement("a", navbar, "", "gsm_forside.html", ["id", "header_logo"]);
    const logo = document.querySelector("#header_logo");

    createModElement("img", logo, "", "", [["src", ""], ["id", "header_logoImg"], ["alt", "goSupermodel_logo"]]);

    createModElement("ul", navbar, "", "", ["id", "header_tabUl"]);
    for (i = 0; i < 5; i++) {
        createModElement("li", document.querySelector("#header-tabUl"), "", "", ["class", "header_tabLi"]);
    }
    const tabLiiElements = document.getElementsByClassName("js-header-li");

    // Definerer tabsene
    createModElement("a", tabLiElements[1], "Forside", "gsm_forside.html", ["class", "header_link"]);
    createModElement("a", tabLiElements[2], "Shopping", "gsm_shopping.html", ["class", "header_link"]);
    createModElement("a", tabLiElements[3], "Spill", "gsm_spill.html", ["class", "header_link"]);
    createModElement("a", tabLiElements[4], "Forum", "gsm_forum.html", ["class", "header_link"]);


    // Lager en ting (f.eks. "a", "div") med det den skulle trenge av spesifikasjoner
    // attr = enten et array med ["attribute","verdi"] eller matrise [["attribute","verdi"],
        // ["attribute","verdi"], ..., ...]
    function createModElement(tagName, target, content = "", url = "", attr = "") {
    const node = document.createElement(tagName); // f.eks. "a", "div"
    const textnode = document.createTextNode(content); // definerer teksten
    node.appendChild(textnode); //legger til teksten i tingen (f.eks. i en "a")
    if (url !== "") {
        node.setAttribute("href", url); //setter link til den oppgitte urlen
    }
    if (Array.isArray(attr)) { //tror denne sjekker om den har noe innhold
        if (Array.isArray(attr[0])) { //tror denne sjekker om det er en matise
            for (i = 0; i < attr.length; i++) {
                node.setAttribute(attr[i][0], attr[i][1]); //setter flere attributter til tingen
            }
        }
        else {
            node.setAttribute(attr[0], attr[1]); //er ikke en matrise, setter attributt tin tingen
        }
    }
    target.appendChild(node);
    }
}