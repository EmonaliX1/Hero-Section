const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75 ,window.innerWidth / window.innerHeight , 0.1 , 1000)

const geometry = new THREE.BoxGeometry()

const materials = new THREE.MeshBasicMaterial({ color : "red" })


const object = new THREE.Mesh(geometry , materials ) ;

scene.add(object) ;


camera.position.z = 3 ;


const renderer =  new THREE.WebGLRenderer(canvas)
renderer.setSize( window.innerWidth , window.innerHeight  ) ;

document.body.appendChild( renderer.domElement );

renderer.render(scene , camera)