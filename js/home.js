
const columnaDerecha = document.getElementById('columnaDerecha');
const fondoMenu =  document.getElementById('fondoMenu');
const iconoMenu = document.getElementById('iconoMenu')


iconoMenu.addEventListener('click', aparecerMenu)
//El stopPropagation, como el columna derecha es hijo del fondo menu, este le afectaba todo. Con el stoppropagation, detengo esa afectacion. 
columnaDerecha.addEventListener('click', e => {e.stopPropagation()})
fondoMenu.addEventListener('click', (e) => {
    
    fondoMenu.style.display = "none";
    columnaDerecha.style.right = "-1000px";
    iconoMenu.style.display = "block";
})

function aparecerMenu(){
    columnaDerecha.style.right = "-280px";
    iconoMenu.style.display = "none"
    fondoMenu.style.display = "block"  
}

// function desaparecerMenu(){
//     fondoMenu.style.display = "none";
//     columnaDerecha.style.right = "-1000px";
//     iconoMenu.style.display = "block";
// }    
