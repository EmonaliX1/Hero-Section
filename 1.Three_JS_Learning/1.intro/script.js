
// first defined where our film star --> in this case canvas is our { theather Holl }

const target = document.getElementById('canvas')

//  Scene the Area where our shoting Start // 
const scene = new THREE.Scene()

// the hero of our film and boxGeometry the type of our Actor 
const geometry = new THREE.BoxGeometry(2,2,2)

// the matrial the how the hero look like and which design hero apper
const material = new THREE.MeshBasicMaterial({color : "red"})

// the mesh the creator of our hero --> it take geometty the and matrial to create our hero 
const box = new THREE.Mesh(geometry , material) // mesh creatre the hero 

//it add our hero to the scene 
scene.add(box)

const size = {
    width : 700  ,
    height : 500 ,
}

//the camra it record our hero   which angle which ratio the camra capature of our hero 
const camra = new THREE.PerspectiveCamera(75 , size.width / size.height)

// it simple  say that where our camra in the scene 
camra.position.z = 4 ;
camra.position.x = 2 ;

//  add the camra in the area or scene 
scene.add(camra)

// where our video showing and which  technology the  video rander  .
const renderer = new THREE.WebGLRenderer({canvas : target})


renderer.setSize(size.width  , size.height)

// it the producer   who want camra , scene or area to capture the video 
renderer.render(scene , camra)


// full proess 
//---> Area  ---->  Hero --> Hero Design  --->  Creator of Hero ---> camra ---> position of camra  ---> producer ---> cinema holl 

//--> Scene --> geometry ---> Material --> mesh --> camra --> postion of camra ---> render ---> webglRenderer

//-->Note :  the scene the area  where i have to add geometry , matrial , camra  , mesh {the creator of hero}

// -->Produce or render , went the scene or area of the  obj and camra to capture the video 

//--> webgl is the technolegy  where video will be process 