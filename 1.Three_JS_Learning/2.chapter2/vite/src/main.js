import './style.css'
import * as THREE  from "three"
const canvas = document.querySelector('canvas')

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75 ,window.innerWidth / window.innerHeight , 0.1 , 1000)

const geometry = new THREE.BoxGeometry(1,1,1 )

const materials = new THREE.MeshBasicMaterial({ color : "red"  , wireframe:true})


const object = new THREE.Mesh(geometry , materials ) ;




// object.position.x =  -1
// object.position.y =  1
// object.position.z = 1

object.rotation.x = 10 

scene.add(object) ;


camera.position.z = 3 ;

window.addEventListener('resize' , ()=>{
  const width = window.innerWidth ;
 const   height = window.innerHeight ;
  camera.aspect = width / height ;
  camera.updateProjectionMatrix()
  renderer.setSize(width , height)
  renderer.render(scene , camera)
  // alert({'width' : width , 'height': height})
})



const renderer =  new THREE.WebGLRenderer({canvas : canvas})
renderer.setSize( window.innerWidth , window.innerHeight  ) ;

document.body.appendChild( renderer.domElement );

renderer.render(scene , camera)

function animate(){
  window.requestAnimationFrame(animate) 
  object.rotation.y += .01 ;
  renderer.render(scene , camera)
}

// animate()