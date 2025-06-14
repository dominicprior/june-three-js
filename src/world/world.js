import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createSquare } from './components/square.js';
import { createSquare2 } from './components/square2.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/resizer.js';
import { Loop } from './systems/loop.js';
import { createHexagon } from './components/hexagon.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    scene = createScene();
    renderer = createRenderer();
    camera = createCamera();
    const controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const mesh = createHexagon(20, 0.15);
    const lights = createLights();
    // loop.updatables.push(mesh);
    // loop.updatables.push(camera);
    loop.updatables.push(controls);
  //   controls.addEventListener('change', () => {
  //     this.render();
  //  });
    scene.add(mesh, lights.light, lights.ambientLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
