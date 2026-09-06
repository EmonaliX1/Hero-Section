const canvas = document.querySelector('canvas')

const scene = new THREE.Scene()

// const camear = new THREE.PerspectiveCamera(the percent the camra see  ,  who much area  the camra cover to see the object  ,  how much the see in the long , how much deepth see the obj    )

const camera = new THREE.PerspectiveCamera( 70 , window.innerWidth /  window.innerHeight  , 0.1 , 1000)

const geometry = new THREE.BoxGeometry()

const materials = new THREE.MeshBasicMaterial( { color : "red" })

const box = new THREE.Mesh(geometry , materials )

scene.add(box)

camera.position.z = 3

const renderer = new THREE.WebGLRenderer( canvas)

renderer.setSize( window.innerWidth , window.innerHeight )

document.body.appendChild( renderer.domElement)
// document.body.appendChild( renderer.domElement)

renderer.render(scene ,camera)

