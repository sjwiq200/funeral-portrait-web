<script setup lang="ts">
import * as THREE from 'three';

// 마우스 컨트롤 하기 위함
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = ref(null);
let scene: any = null;
let camera: any = null;
let renderer: any = null;
let cube: any = null;
let torusKnot: any = null;

function initScene() {
  // three.js에서의 컨테이너
  scene = new THREE.Scene();
}

function initCamera() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
  // camera.position.set( 0, 15, 35 );
  camera.position.z = 50;
}

function initObject() {
  // 원환면
  /* const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const mesh = new THREE.Mesh(geometry, material); */

  const geometry = new THREE.BoxGeometry(50,1,50);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 0;
  mesh.position.y = 0;
  mesh.position.z = 1;

  scene.add(mesh)
}

// 축을 시각화해서 보여주는 속성 (x: 빨강, y: 초록, z: 파랑)
function initAxesHelper() {
  const axesHelper = new THREE.AxesHelper(10)
  scene.add(axesHelper)
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  container.value.appendChild(renderer.domElement);
}

function initMouseControl() {
  const controls = new OrbitControls( camera, renderer.domElement );
  controls.target.set( 0, 2, 0 );
  controls.update();
}

// 마지막에 렌더링하는 함수
function animate() {
  renderer.render( scene, camera );
}

function init() {
  initScene();
  initAxesHelper();
  initCamera();
  initObject();
  initRenderer();
  initMouseControl();
  
};


onMounted(() => {
  console.dir(`onMounted`);
  init();
});

</script>

<template>
  <div ref="container"></div>
</template>
