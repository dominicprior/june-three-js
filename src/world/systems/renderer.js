import { WebGLRenderer, BasicShadowMap } from 'three';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = BasicShadowMap;
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  return renderer;
}

export { createRenderer };
