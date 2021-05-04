{
    const welcome = () => {
        console.log("Helo World!");
    }

    const toggleBackground = () => {
        const theme = document.querySelector(".body__theme");
        const themeName = document.querySelector(".js-themeName");

        theme.classList.toggle("body__theme--darkBackground");
        themeName.innerText = theme.classList.contains("body__theme--darkBackground") ? "Jasne" : "Ciemne";
    };

    const hiddenPostscript = () => {
        const postscriptButtonText = document.querySelector(".js-postscriptButtonText");
        const postscript = document.querySelector(".body__postscript");

        postscript.classList.toggle("body__hidden");
        postscriptButtonText.innerText = postscript.classList.contains("body__hidden") ? "Dodaj" : "Usuń";
    };

    const init = () => {

        const colorButton = document.querySelector(".js-colorButton");
        const postscriptButton = document.querySelector(".js-postscriptButton");

        colorButton.addEventListener("click", toggleBackground);
        postscriptButton.addEventListener("click", hiddenPostscript);

        welcome();

    };

    init();

}