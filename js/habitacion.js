import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.174.0/three.tsl.js';
// Configuración de la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear iluminación
const light = new THREE.AmbientLight(0xffffff, 0.6); // Luz ambiental
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Crear el suelo
const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);

// Crear las paredes
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, side: THREE.DoubleSide });

const backWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), wallMaterial);
backWall.position.set(0, 2.5, -5);
scene.add(backWall);

const sideWall = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), wallMaterial);
sideWall.rotation.y = Math.PI / 2;
sideWall.position.set(-5, 2.5, 0);
scene.add(sideWall);

// Posicionar la cámara
camera.position.set(0, 3, 10);
camera.lookAt(0, 0, 0);

// Controles para mover la cámara
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Ajustar la ventana cuando se redimensiona
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
fetch('php/backend.php')
    .then(response => response.json())
    .then(data => {
        console.log("Datos cargados:", data);
        // Aquí puedes usar los datos para cambiar los colores o añadir decoraciones en la escena
    })
    .catch(error => console.error("Error al cargar los datos:", error));