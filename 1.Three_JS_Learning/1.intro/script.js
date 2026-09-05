
console.log( "three js : "+window.THREE)

const target = document.getElementById('canvas')

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(2,2,2)

const material = new THREE.MeshBasicMaterial({color : "red"})

const box = new THREE.Mesh(geometry , material)

scene.add(box)

const size = {
    width : 700  ,
    height : 500 ,
}

const camra = new THREE.PerspectiveCamera(75 , size.width / size.height)

camra.position.z = 4 ;
camra.position.x = 2 ;


scene.add(camra)

const renderer = new THREE.WebGLRenderer({canvas : target})


renderer.setSize(size.width  , size.height)

renderer.render(scene , camra)