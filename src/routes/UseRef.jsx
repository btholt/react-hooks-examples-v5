import { memo, useEffect, useRef } from 'react';
import * as THREE from 'three';

const UseRefMemo = memo(function UseRef() {
  const renderTarget = useRef();

  useEffect(() => {
    let continueRendering = true;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderTarget.current.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
    camera.position.z = 5;
    function animate() {
      if (continueRendering) {
        requestAnimationFrame(animate);
      }
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
    return () => {
      continueRendering = false;
    };
  });

  return (
    <div className="use-ref page">
      <div ref={renderTarget} className="scene"></div>
    </div>
  );
});

export default UseRefMemo;
