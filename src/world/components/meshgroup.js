import {
SphereGeometry,
Group,
MathUtils,
Mesh,
MeshStandardMaterial,
} from 'three';

function createMeshGroup() {
  const group = new Group();
  const geometry = new SphereGeometry(0.25, 6, 6);
  const material = new MeshStandardMaterial({
    color: 'indigo',
    flatShading: true,
  });
  const protoSphere = new Mesh(geometry, material);
  group.add(protoSphere);
  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();
    group.add(sphere);
    // sphere.position.x = MathUtils.randFloatSpread(10);
    // sphere.position.y = MathUtils.randFloatSpread(10);
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.scale.multiplyScalar(0.01 + i);
  }
  group.scale.multiplyScalar(2);
  group.tick = (delta) => {};
  return group;
}
export { createMeshGroup };
