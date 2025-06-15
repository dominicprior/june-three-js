import { BoxGeometry, Mesh, MeshBasicMaterial, MathUtils, TextureLoader, MeshStandardMaterial,
  DoubleSide, LineSegments, EdgesGeometry, LineBasicMaterial,
 } from 'three';

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('assets/textures/uv-test-col.png');
  const spec = {
    // map: texture,
    color: 'pink',
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
  cube.position.set(0,0,1);
  cube.rotation.set(-0.5, -0.1, 0.8);
  const radiansPerSecond = MathUtils.degToRad(30);
  cube.castShadow = true;
  cube.tick = (delta) => {
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
