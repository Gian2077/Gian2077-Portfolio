// Elementos
const rootHTML = document.documentElement;
const btnTheme = document.querySelector("#btn__theme");
// Funções
function changeTheme()
{
    const currentTheme = rootHTML.getAttribute("data-theme");
    if(currentTheme === "dark")
    {
        rootHTML.setAttribute("data-theme", "light");
    }
    else if (currentTheme === "light")
    {
        rootHTML.setAttribute("data-theme", "dark");
    }
    btnTheme.classList.toggle("bi-sun");
    btnTheme.classList.toggle("bi-moon-stars");
}
// Eventos
btnTheme.addEventListener("click", changeTheme);