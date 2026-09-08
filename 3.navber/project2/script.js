const menu = document.getElementById('menu')
const underList = document.getElementById('underList')


let isMenuOpen = false ;


menu.addEventListener('click',()=>{
    if(!isMenuOpen){
        underList.style.display = 'block';
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-x')
        isMenuOpen = true
    }
    else{
        underList.style.display = 'none';
        menu.classList.remove('fa-x')
        menu.classList.add('fa-bars')
        isMenuOpen = false
    }
})