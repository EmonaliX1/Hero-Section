
const bg = document.getElementById('background')
console.log(bg) ;


const value  = 40 ;



function addBox (value){
  const   cols = Math.ceil(window.innerWidth / value ) +1;
  const  rows = Math.ceil(window.innerHeight / value ) ;
  const boxNeed = cols * rows ;
    for (let i =  0 ; i < boxNeed ; i ++){
            const  box = document.createElement('div')
            box.classList.add('box')
            bg.appendChild(box)
    }  

    bg.style.gridTemplateColumns = `repeat(${cols} ,1fr )`
    bg.style.gridTemplateRows = `repeat(${rows} , 1fr) `
  
}

window.addEventListener('resize' , ( )=> {
    addBox(value)
})

addBox(value)