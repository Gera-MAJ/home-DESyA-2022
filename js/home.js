
const columnaDerecha = document.getElementById('columnaDerecha');
const fondoMenu =  document.getElementById('fondoMenu');
const iconoMenu = document.getElementById('iconoMenu')


iconoMenu.addEventListener('click', aparecerMenu)
fondoMenu.addEventListener('click', desaparecerMenu)


function aparecerMenu(){
    columnaDerecha.style.right = "-300px";
    iconoMenu.style.display = "none"
    fondoMenu.style.display = "block"  
}

function desaparecerMenu(){
    fondoMenu.style.display = "none";
    columnaDerecha.style.right = "-1000px";
    iconoMenu.style.display = "block";
}    
