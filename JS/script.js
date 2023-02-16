{
    const buttonRemove = document.querySelector(".js-buttonRemove");
    const buttonChange = document.querySelector(".js-buttonChange");
    const heading = document.querySelector(".js-heading");
    const welcome = () => {
        console.log("Cześć!");
    }

    const remove = () => {
        heading.remove();
        buttonRemove.remove();
        buttonChange.remove();
    }

    const change = () => {
        heading.classList.toggle("header__otherColour");
    }

    const init = () => {
        buttonRemove.addEventListener("click", remove);
        buttonChange.addEventListener("click", change);

        welcome();
    }

    init();

}
