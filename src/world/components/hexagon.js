// Create a hexagon made of small, randomly coloured triangles.

import { BufferGeometry, MeshBasicMaterial, MeshStandardMaterial,
    Mesh, Float32BufferAttribute, Color, DoubleSide, BufferAttribute,
 } from 'three';

function createHexagon(n, scale) {

    let vertices = [ ];
    for (let row = 0; row < n; row++) {
        addRowOfTriangles(vertices, 2*n - row,     row, 0);
        addRowOfTriangles(vertices, 2*n - row - 1, row, 1);
        addRowOfTriangles(vertices, 2*n - row,     - row - 1, 1);
        addRowOfTriangles(vertices, 2*n - row - 1, - row - 1, 0);
    }
    for (let i = 0; i < vertices.length; i++) {
        vertices[i] *= scale;
    }
    let colors = [];
    for (let i = 0; i < vertices.length / 9; i++) {
        const r = randomInRange(0, 0.2);
        const g = randomInRange(0.6, 0.8);
        const b = randomInRange(0, 0.2);
        colors.push(r, g, b, r, g, b, r, g, b);
    }
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));

    const material = new MeshStandardMaterial({
        vertexColors: true,
        side: DoubleSide,
        // color: 'purple',
    });
    const mesh = new Mesh(geometry, material);
    // mesh.receiveShadow = true;
    return mesh;
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Add a row of triangles to the hexagon, pointing up if `up` is 1.

function addRowOfTriangles(vertices, numTriangles, rowNum, up) {
    for (let i = 0; i < numTriangles; i++) {
        const x = i - (numTriangles - 1) / 2;
        const y  = (rowNum + up)     * Math.sqrt(3) / 2;
        const yy = (rowNum + 1 - up) * Math.sqrt(3) / 2;
        addVertex(vertices, x - 0.5, y);
        addVertex(vertices, x + 0.5, y);
        addVertex(vertices, x, yy);
    }
}

function addVertex(vertices, x, y) {
    const r = Math.hypot(x, y);
    const z = 15000 / (r*r*r + 1000);
    vertices.push(x, y, 0);
}

export { createHexagon };
