import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader } from 'three';

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('assets/textures/uv-test-col.png');
  const spec = {
    map: texture,
    // color: 'purple',
  };
  return new MeshStandardMaterial(spec);
}

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const spec = {
    color: 'purple',
  };
  const material = createMaterial(spec);
  const cube = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);
  const radiansPerSecond = MathUtils.degToRad(30);
  cube.tick = (delta) => {
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
