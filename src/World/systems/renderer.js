import { WebGLRenderer } from 'https://cdn.jsdelivr.net/npm/three@0.177.0/build/three.module.js';

function createRenderer() {
  const renderer = new WebGLRenderer();
  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };
