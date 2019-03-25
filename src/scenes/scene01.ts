import * as THREE from 'three'

const setup = (scene: THREE.Scene, camera: THREE.Camera) => {

    /* CUBE */

    /* let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    let box = new THREE.Mesh( geometry, material );

    scene.add( box ); */

    /* TRIANGLES */

    /*
    let geometry =new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-2,0,0))
    geometry.vertices.push(new THREE.Vector3(2,0,0))
    geometry.vertices.push(new THREE.Vector3(0,2,0))

    geometry.vertices.push(new THREE.Vector3(-2,-2,0))
    geometry.vertices.push(new THREE.Vector3(2,-2,0))
    geometry.vertices.push(new THREE.Vector3(0,2,0))

    geometry.faces.push(new THREE.Face3(0,1,2)) 
    const material =new THREE.MeshBasicMaterial( {color: 0x00ff00});

    const triangle =new THREE.Mesh( geometry, material );

    scene.add( triangle );*/

    /*  OBJ LOADER */

    /*
    const loader = new OBJLoader()

    loader.load(
        'ipad.obj',
        (model) => {
            model.traverse(function(child) {
                if (child instanceof THREE.Mesh) {
                    console.log(child.material)
                }
            });
            model.position.set(0, 0, 0);
            scene.add(model);
            renderer.render(scene, camera);
        },
        (progress) => {
            console.log("in progress")
            console.log(progress)
        },
        (error) => {
            console.log("in error")
            console.log(error)
            console.log(error.message)
        }
    ) */

    /* CUBE TRANSFORM*/

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } );
    let box = new THREE.Mesh( geometry, material );

    //box.rotation.y = 45*Math.PI/180
    //box.scale.set(2,2,2);

    box.position.x = 2
    box.rotation.z = 45*Math.PI/180
    box.scale.set(2,2,2);

    scene.add( box );

    camera.position.z =5;

    console.log("hello")

}

export default setup