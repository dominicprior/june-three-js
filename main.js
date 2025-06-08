// I am following https://discoverthreejs.com/

// This import statement works because of the importmap defined in index.html.
// Without the importmap (or using a bundler like Rollup.js), you would need
// to use a relative path or a CDN URL, such as:
// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.177.0/build/three.module.js";
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ffa0 } );
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );
camera.position.z = 5;
const points = [];
points.push( new THREE.Vector3( - 1, 0, 0 ) );
points.push( new THREE.Vector3( 0, 1, 0 ) );
points.push( new THREE.Vector3( 1, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, lineMaterial );
scene.add( line );
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
