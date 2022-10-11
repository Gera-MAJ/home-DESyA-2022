
const columnaDerecha = document.querySelector('.columnaDerecha');
const fondoMenu =  document.getElementById('fondoMenu');
const iconoMenu = document.getElementById('iconoMenu')

document.getElementById('menu_contenedor').addEventListener('click', activarMenu)

const line1 = document.querySelector(".line1_bars");
const line2 = document.querySelector(".line2_bars");
const line3 = document.querySelector(".line3_bars");

function activarMenu(){
    line1.classList.toggle("active_line1_bars")
    line2.classList.toggle("active_line2_bars")
    line3.classList.toggle("active_line3_bars")

    columnaDerecha.classList.toggle("activar_columnaDerecha")
}


// iconoMenu.addEventListener('click', aparecerMenu)
//El stopPropagation, como el columna derecha es hijo del fondo menu, este le afectaba todo. Con el stoppropagation, detengo esa afectacion. 
columnaDerecha.addEventListener('click', e => {e.stopPropagation()})

// fondoMenu.addEventListener('click', (e) => {
    
//     fondoMenu.style.display = "none";
//     columnaDerecha.style.right = "-1000px";
//     iconoMenu.style.visibility = "visible";
// })


// function aparecerMenu(){
//     columnaDerecha.style.right = "-178px";
//     iconoMenu.style.visibility = "hidden"
//     fondoMenu.style.display = "block" 
// }

// function desaparecerMenu(){
//     fondoMenu.style.display = "none";
//     columnaDerecha.style.right = "-1000px";
//     iconoMenu.style.display = "block";
// }    
