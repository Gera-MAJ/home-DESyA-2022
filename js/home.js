
const columnaDerecha = document.getElementById('columnaDerecha');
const fondoMenu =  document.getElementById('fondoMenu');
const iconoMenu = document.getElementById('iconoMenu')


iconoMenu.addEventListener('click', aparecerMenu)
//El stopPropagation, como el columna derecha es hijo del fondo menu, este le afectaba todo. Con el stoppropagation, detengo esa afectacion. 
columnaDerecha.addEventListener('click', e => {e.stopPropagation()})
fondoMenu.addEventListener('click', (e) => {
    
    fondoMenu.style.display = "none";
    columnaDerecha.style.right = "-1000px";
    iconoMenu.style.visibility = "visible";
})


function aparecerMenu(){
    columnaDerecha.style.right = "-178px";
    iconoMenu.style.visibility = "hidden"
    fondoMenu.style.display = "block" 
    columnaDerecha.style.transition = '200ms';
}

// function desaparecerMenu(){
//     fondoMenu.style.display = "none";
//     columnaDerecha.style.right = "-1000px";
//     iconoMenu.style.display = "block";
// }    
