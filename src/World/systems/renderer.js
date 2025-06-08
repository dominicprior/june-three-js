import { WebGLRenderer } from 'https://cdn.jsdelivr.net/npm/three@0.177.0/build/three.module.js';

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer };
