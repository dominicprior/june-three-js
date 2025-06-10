import { DirectionalLight, HemisphereLight, AmbientLight } from 'three';

function createLights() {
  const light = new DirectionalLight('white', 0);
  // const ambientLight = new AmbientLight('white', 2);
  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'black', // dim ground color
    15, // intensity
  );
  ambientLight.position.set(1, 0, 0);
  light.position.set(10, 10, 10);
  return { light, ambientLight };
}

export { createLights };
