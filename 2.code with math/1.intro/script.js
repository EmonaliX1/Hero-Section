window.addEventListener('load',()=>{
    write()
})

function write(){
    const canvas = document.getElementById('canvas')
    const  context = canvas.getContext('2d')
    let width = canvas.width = window.innerWidth ;
    let height  = canvas.height = window.innerHeight ;

    // context.fillRect(0,0,width , height)  // how to fill the canvas like it work background and width is canvas width and height is canvas height .

    for(let i = 0 ; i < 5 ; i++){
        context.beginPath();
        context.moveTo(Math.random() * width , Math.random() * height)
        context.lineTo(Math.random() * width , Math.random() * height)
        context.stroke()
    }
}

window.addEventListener('resize' , ()=>{
    write()
})

// setInterval(()=>{
//     write()
// },1000)

window.addEventListener('click',()=>{
    write()
})



