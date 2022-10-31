

const columnaDerecha = document.querySelector('.columnaDerecha');
const menu_contenedor = document.querySelector('.menu_contenedor')

document.querySelector('.menu_contenedor').addEventListener('click', activarMenu)
//con esta forma puedo hacer que cambie el menu de arriba en la vista movil
window.addEventListener('scroll', activarMenuMovil)

const line1 = document.querySelector(".line1_bars");
const line2 = document.querySelector(".line2_bars");
const line3 = document.querySelector(".line3_bars");
const barra = document.querySelector(".menu_movil")

function activarMenu(){
    line1.classList.toggle("active_line1_bars")
    line2.classList.toggle("active_line2_bars")
    line3.classList.toggle("active_line3_bars")

    menu_contenedor.classList.toggle('activar_menu_contenedor')
    columnaDerecha.classList.toggle("activar_columnaDerecha")
}

function activarMenuMovil(){
    barra.classList.toggle("active_menu_movil", window.scrollY>0)
}
