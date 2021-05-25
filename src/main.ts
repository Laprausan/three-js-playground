import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper } from 'three';

// A scene holds all objects (shapes, lights, cameras, etc)
const scene = new THREE.Scene();

// Perspective camera is like a normal 3d view
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector<HTMLCanvasElement>('#bg')!
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Shape, the material of the shape, and then the mesh being built with both to be added to the scene.
const shape = new THREE.DodecahedronGeometry(10);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const mesh = new THREE.Mesh(shape, material);
scene.add(mesh, new GridHelper(200, 50));

// Animation loop, recursive.
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.005
  renderer.render(scene, camera);
}
animate();

//camera controls for debugging
const controls = new OrbitControls(camera, renderer.domElement);
