import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.177.0/examples/jsm/controls/OrbitControls.js?module';
function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = true;
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.autoRotate = true;
  controls.tick = () => controls.update();
  //   controls.dampingFactor = 0.25;
  //   controls.target.set(1,0,0);
  //   controls.screenSpacePanning = false;
  //   controls.maxPolarAngle = Math.PI / 2; // limit vertical rotation
  //   controls.minDistance = 1; // limit zoom
  //   controls.maxDistance = 100; // limit zoom
  return controls;
}

export { createControls };
