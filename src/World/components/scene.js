import { Color, Scene } from 'https://cdn.jsdelivr.net/npm/three@0.177.0/build/three.module.js';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };
