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
  
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( 0, 15, 35 );
  scene = new THREE.Scene();

  // Geometry
  // let geometry = new THREE.TorusKnotGeometry( 25, 8, 75, 20 );
  // let material = new THREE.MeshPhongMaterial( {
  //   color: 0xff0000,
  //   shininess: 150,
  //   specular: 0x222222
  // });

  // torusKnot = new THREE.Mesh( geometry, material );
  // torusKnot.scale.multiplyScalar( 1 / 18 );
  // torusKnot.position.y = 3;
  // torusKnot.castShadow = true;
  // torusKnot.receiveShadow = true;
  // scene.add( torusKnot );

  // 바닥판 그리기
  const geometry = new THREE.BoxGeometry( 10, 0.15, 10 );
  const material = new THREE.MeshPhongMaterial( {
    color: 0xa0adaf,
    shininess: 150,
    specular: 0x111111
  } );

  const ground = new THREE.Mesh( geometry, material );
  ground.scale.multiplyScalar( 3 );
  ground.castShadow = false;
  ground.receiveShadow = true;
  scene.add( ground );
}

function initRenderer() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setAnimationLoop( animate );
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.BasicShadowMap;
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
  initRenderer();

  
  /* renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop( animate );
  container.value.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5; */
};


onMounted(() => {
  console.dir(`onMounted`);
  init();
});

</script>

<template>
  <div ref="container"></div>
</template>
