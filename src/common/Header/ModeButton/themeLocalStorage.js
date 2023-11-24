export const saveThemeToLocalStorage = theme => 
    localStorage.setItem("theme",JSON.stringify(theme));


export const getThemeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("theme")) || false;