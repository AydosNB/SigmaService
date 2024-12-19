const btnMenu = document.querySelector("#btn-menu")
const navContent = document.querySelector("#header-nav_content")

btnMenu.addEventListener("click", () => {
    navContent.classList.toggle("active")
    if (navContent.classList.contains("active")) {
        btnMenu.querySelector(".bx").classList.replace("bx-menu", "bx-x")
    }else {
        btnMenu.querySelector(".bx").classList.replace("bx-x", "bx-menu")
    }
})
