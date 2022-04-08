let show = true

const menuSection = document.querySelector(".menu-section")
const menuBurguer = menuSection.querySelector(".menu-hamburger")

menuBurguer.addEventListener("click", () => {

    menuSection.classList.toggle("on", show)
    show =!show
})