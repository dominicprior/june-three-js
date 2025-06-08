// I am following https://discoverthreejs.com/

// This import statement works because of the importmap defined in index.html.
// Without the importmap (or using a bundler like Rollup.js), you would need
// to use a relative path or a CDN URL, such as:
// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.177.0/build/three.module.js";
import {
    Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial,
    Mesh, LineBasicMaterial, Line, BufferGeometry, Vector3,
} from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.177.0/examples/jsm/controls/OrbitControls.js';
const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);  // so our scene will look good on HiDPI displays
document.body.append( renderer.domElement );
const cubeGeometry = new BoxGeometry( 1, 1, 1 );
const cubeMaterial = new MeshBasicMaterial( { color: 0x00ffa0 } );
const lineMaterial = new LineBasicMaterial( { color: 0x0000ff } );
const cube = new Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );
camera.position.z = 5;
const points = [];
points.push( new Vector3( - 1, 0, 0 ) );
points.push( new Vector3( 0, 1, 0 ) );
points.push( new Vector3( 1, 0, 0 ) );
const lineGeometry = new BufferGeometry().setFromPoints( points );
const line = new Line( lineGeometry, lineMaterial );
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
