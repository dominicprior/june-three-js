// Create a square mesh with two colors using a non-indexed BufferGeometry.
// Produce the two different colors by setting the color attribute and
// the vertexColors property.

import { BufferGeometry, MeshBasicMaterial,
    Mesh, Float32BufferAttribute, Color, DoubleSide, BufferAttribute,
 } from 'three';

function createSquare() {

  const vertices = [
    0, 0, 0,   1, 0, 0,   0, 1, 0,
    1, 0, 0,   1, 1, 0,   0, 1, 0
  ];

  const pink = new Color('pink');
  const orange = new Color('orange');
  const colors = [
    pink.r, pink.g, pink.b,
    pink.r, pink.g, pink.b,
    pink.r, pink.g, pink.b,
    orange.r, orange.g, orange.b,
    orange.r, orange.g, orange.b,
    orange.r, orange.g, orange.b,
  ];

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

  const material = new MeshBasicMaterial({ vertexColors: true, side: DoubleSide });
  const square = new Mesh(geometry, material);
  return square;
}

export { createSquare };
