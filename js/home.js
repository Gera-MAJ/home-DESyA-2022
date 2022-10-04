
const columnaDerecha = document.getElementById('columnaDerecha');
const iconoMenu = document.getElementById('iconoMenu')

iconoMenu.addEventListener('click', sacarMenu)



function sacarMenu(){
    columnaDerecha.style.right = "200px";   
}
