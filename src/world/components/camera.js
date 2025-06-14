import { PerspectiveCamera } from 'three';

let time = 0;

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  camera.tick = (delta) => {
    time += delta;
    camera.position.z = 10 + 2.4 * time;
  };
  return camera;
}

export { createCamera };
