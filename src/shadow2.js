// console.log('dominic!');
// import { World } from './world/world.js';

// function main() {
//   const container = document.querySelector('#scene-container');
//   const world = new World(container);
//   world.start();
// }

// main();

////////////////////
import * as THREE from 'three';
console.log('dominic shadow!');

const scene = new THREE.Scene();
const aspect_ratio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
camera.position.y = 1000;
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const donutGeometry = new THREE.TorusGeometry(100, 50, 8, 20);
const donutMaterial = new THREE.MeshStandardMaterial();
// donutMaterial.emissive.setRGB(0.8, 0.1, 0.1);
// donutMaterial.specular.setRGB(0.9, 0.9, 0.9);
const donut = new THREE.Mesh(donutGeometry, donutMaterial); 
scene.add(donut);
donut.castShadow = true;

var sunlight = new THREE.DirectionalLight();
sunlight.intensity = 4.5;
sunlight.position.set(100, 100, 100);
scene.add(sunlight);
sunlight.castShadow = true;
sunlight.shadow.camera.top = 200;
sunlight.shadow.camera.bottom = - 200;
sunlight.shadow.camera.left = - 200;
sunlight.shadow.camera.right = 200;
sunlight.shadow.camera.near = 1;
sunlight.shadow.camera.far = 1000;
sunlight.shadow.mapSize.width = 16;
sunlight.shadow.mapSize.height = 16;

// scene.add( new THREE.CameraHelper( sunlight.shadow.camera ) );

const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
// const groundMaterial = new THREE.MeshPhongMaterial();
const groundMaterial = new THREE.MeshStandardMaterial({color: 'pink'});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(ground);
ground.position.set(0, -180, 0);
ground.rotation.set(-Math.PI/2, 0, 0);
ground.receiveShadow = true;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();