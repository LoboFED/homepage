console.log("Helo World!");


let theme = document.querySelector(".body__theme");

let colorButton = document.querySelector(".js-colorButton");

let themeName = document.querySelector(".js-themeName");

let postscriptButton = document.querySelector(".js-postscriptButton");

let postscriptButtonText = document.querySelector(".js-postscriptButtonText");

let postscript = document.querySelector(".body__postscript");

colorButton.addEventListener("click", () => {
    theme.classList.toggle("body__theme--darkBackground");

    themeName.innerText = theme.classList.contains("body__theme--darkBackground") ? "Jasne" : "Ciemne";
});

postscriptButton.addEventListener("click", () => {
    postscript.classList.toggle("body__hidden");

    postscriptButtonText.innerText = postscript.classList.contains("body__hidden") ? "Dodaj" : "Usuń";
});