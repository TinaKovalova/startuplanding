import "/src/scss/style.scss";

window.addEventListener("load", () => {

    const header = document.querySelector(".header");
    const burgerButton = document.querySelector(".burger-button");
    burgerButton?.addEventListener("click", () => {
        header?.classList.toggle("_active-menu");
    });
 

});


