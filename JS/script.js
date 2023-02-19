{
    const welcome = () => {
        console.log("Cześć!");
    }

    const remove = (heading, buttonRemove, buttonChange) => {
        heading.remove();
        buttonRemove.remove();
        buttonChange.remove();
    }

    const change = (heading) => {
        heading.classList.toggle("header__otherColour");
    }

    const init = () => {
        const heading = document.querySelector(".js-heading");
        const buttonRemove = document.querySelector(".js-buttonRemove");
        const buttonChange = document.querySelector(".js-buttonChange");
        buttonRemove.addEventListener("click", () => remove(heading, buttonRemove, buttonChange));
        buttonChange.addEventListener("click", () => change(heading));
        
        
        welcome();
    }

    init();

}
