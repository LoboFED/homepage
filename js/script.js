console.log("Helo World!");

let theme = document.querySelector(".body__theme");

let colorButton = document.querySelector(".js-colorButton");

let postscriptButton = document.querySelector(".js-postscriptButton");

let postscript = document.querySelector(".body__postscript");

colorButton.addEventListener("click", () => {
    theme.classList.toggle("body__theme--brightBackground"); theme.classList.toggle("body__theme--darkBackground");

    if (colorButton.innerText === "Ciemne tło") {
        colorButton.innerText = "Jasne tło";
    } else {
        colorButton.innerText = "Ciemne tło";
    }
});

postscriptButton.addEventListener("click", () => {
    postscript.classList.toggle("body__hidden");

    if (postscriptButton.innerText === "Usuń P.S.") {
        postscriptButton.innerText = "Dodaj P.S.";
    } else {
        postscriptButton.innerText = "Usuń P.S.";
    }
});