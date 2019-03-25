import * as THREE from 'three'

const setup = (scene: THREE.Scene, camera: THREE.Camera) => {

    const rad = Math.PI/180

    let stem = new THREE.CylinderGeometry(1, 1, 15)
    let material = new THREE.MeshBasicMaterial( { color: 0x99dd55 } );
    let stemMesh = new THREE.Mesh( stem, material );
    stemMesh.position.y = 7.5
    scene.add( stemMesh );

    let stamen = new THREE.SphereGeometry(1.2)
    let sMaterial = new THREE.MeshBasicMaterial({color: 0xcccc00})
    let mStamen = new THREE.Mesh(stamen, sMaterial)

    mStamen.position.y = 14.8

    scene.add(mStamen)

    let petal = new THREE.CylinderGeometry(0, .6, 5)
    let pMaterial = new THREE.MeshBasicMaterial({color: 0xdd0033})
    let mPetal = new THREE.Mesh(petal, pMaterial)

    mPetal.rotation.set(0, 0, 90*rad)
    mPetal.position.set(2.5, 15, 0)

    let pivot = new THREE.Object3D()

    for (let angle = 0; angle < 360; angle+=15) {
        let newPetal = mPetal.clone()
        let pivot = new THREE.Object3D()
        pivot.rotation.y = angle*rad
        pivot.add(newPetal)
        scene.add(pivot)
    }

    camera.position.z = 15
    camera.position.y = 25
    camera.rotation.x = -45*rad

}

export default setup
 