console.log("Cześć!");
let buttonRemove = document.querySelector(".js-buttonRemove");
let buttonChange = document.querySelector(".js-buttonChange");
let heading = document.querySelector(".js-heading");
buttonRemove.addEventListener("click", () => {
    heading.remove();
    buttonRemove.remove();
    buttonChange.remove();
});
buttonChange.addEventListener("click", () => {
    heading.classList.toggle("header__otherColour");
});
