// Client-side component declaration
"use client";

// Required imports for Three.js and additional modules
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

// Helper function to calculate viewport sizes and aspects
function Sizes() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {
    width,
    height,
    aspect: width / height,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    frustum: 4.5,
  };
}

// Main component for the 3D Rubik's Cube
export default function RubikCube() {
  // Reference to the mounting DOM element
  const mountRef = useRef(null);

  // Main effect hook for Three.js setup and cleanup
  useEffect(() => {
    // Core Three.js variables
    let renderer, scene, perspectiveCamera, orbitControls;
    let dummy = new THREE.Object3D(),
      rows = [],
      rubikCube = new THREE.Group();

    // Mouse tracking for parallax effect
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    // Initialize the Three.js renderer and scene
    function setUpScene() {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      const sizes = Sizes();
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.CineonToneMapping;
      renderer.toneMappingExposure = 1.75;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setPixelRatio(sizes.pixelRatio);
      renderer.setSize(sizes.width, sizes.height);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }
      scene = new THREE.Scene();
    }

    // Setup the perspective camera
    function setUpCameras() {
      const sizes = Sizes();
      perspectiveCamera = new THREE.PerspectiveCamera(
        45,
        sizes.aspect,
        1,
        1000
      );
      perspectiveCamera.position.set(0, 1, -10);
      scene.add(perspectiveCamera);
    }

    // Configure orbit controls for camera interaction
    function setUpOrbitControls() {
      orbitControls = new OrbitControls(perspectiveCamera, renderer.domElement);
      orbitControls.enableDamping = false;
      orbitControls.enableZoom = false;
      orbitControls.enablePan = false;
      orbitControls.maxPolarAngle = Math.PI * 2;
      orbitControls.target.set(0, 0, 0);
    }

    // Add multiple rect area lights for realistic lighting
    function addLights() {
      RectAreaLightUniformsLib.init();
      const rightLight = new THREE.RectAreaLight(0xffffff, 5, 4, 3);
      rightLight.position.set(-5, 5, 0);
      rightLight.lookAt(rubikCube.position);
      scene.add(rightLight);

      const centerLight = new THREE.RectAreaLight(0xffffff, 5, 4, 3);
      centerLight.position.set(0, 0, 5.21);
      centerLight.lookAt(rubikCube.position);
      scene.add(centerLight);

      const rectLight3 = new THREE.RectAreaLight(0xffffff, 5, 1.84, 8);
      rectLight3.position.set(-2, 4, 0);
      rectLight3.lookAt(rubikCube.position);
      scene.add(rectLight3);

      const frontLight = new THREE.RectAreaLight(0xffffff, 5, 1.84, 8.89);
      frontLight.position.set(-4, 0, -3);
      frontLight.lookAt(rubikCube.position);
      scene.add(frontLight);
    }

    // Create instanced meshes for cube pieces
    function generateCubeInstances() {
      const cubeGeometry = new RoundedBoxGeometry(1, 1, 1);
      const cubeMat = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        emissive: 0x000000,
        roughness: 0.2,
        metalness: 0.9,
        iridescence: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.5,
        reflectivity: 1.0,
      });

      for (let index = 0; index < 3; index++) {
        const cubeInstance = new THREE.InstancedMesh(cubeGeometry, cubeMat, 9);
        cubeInstance.receiveShadow = true;
        cubeInstance.castShadow = true;
        rows.push(cubeInstance);
      }
    }

    // Position cube instances in a 3x3x3 grid
    function arrangeCubes() {
      const offset = (3 - 1) / 2;
      rows.forEach((row, rowIdx) => {
        for (let colIdx = 0; colIdx < 9; colIdx++) {
          const x = (colIdx % 3) * 1.1 - offset;
          const y = Math.floor(colIdx / 3) * 1.1 - offset;
          const z = rowIdx * 1.1;
          dummy.position.set(x, y, z - 1);
          dummy.updateMatrix();
          row.setMatrixAt(colIdx, dummy.matrix);
        }
        row.instanceMatrix.needsUpdate = true;
        row.computeBoundingSphere();
      });
    }

    // Add the cube group to the scene
    function addCubesToScene() {
      rows.forEach((row) => {
        rubikCube.add(row);
        scene.add(rubikCube);
      });
    }

    // Render function with parallax effect
    function renderScene() {
      rubikCube.rotation.y += (targetRotation.y - rubikCube.rotation.y) * 0.1;
      rubikCube.rotation.x += (targetRotation.x - rubikCube.rotation.x) * 0.1;
      rubikCube.rotation.z += 0.005 / 2;
      renderer.render(scene, perspectiveCamera);
    }

    // Animation loop
    let animationId;
    function animate() {
      renderScene();
      animationId = requestAnimationFrame(animate);
    }

    // Mouse move event handler for parallax effect
    function handleMouseMove(e) {
      const { innerWidth, innerHeight } = window;
      mouse.x = (e.clientX / innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / innerHeight) * 2 + 1;
      targetRotation.y = mouse.x * 0.4;
      targetRotation.x = mouse.y * 0.3;
    }

    // Initialize the scene
    setUpScene();
    setUpCameras();
    generateCubeInstances();
    arrangeCubes();
    addCubesToScene();
    setUpOrbitControls();
    addLights();
    animate();

    // Window resize handler
    function handleResize() {
      const sizes = Sizes();
      perspectiveCamera.aspect = sizes.aspect;
      perspectiveCamera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(sizes.pixelRatio);
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      scene = null;
      renderer = null;
      perspectiveCamera = null;
      orbitControls = null;
    };
  }, []);

  // Component render - container for the Three.js canvas
  return (
    <div
      ref={mountRef}
      style={{
        // display: "none",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
