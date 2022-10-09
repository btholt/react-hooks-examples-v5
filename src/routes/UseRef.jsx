import { memo } from 'react';
import THREE from 'three';

const UseRefMemo = memo(function UseRef() {
  const renderTarget = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderTarget.appendChild(renderer.domElement);
  return (
    <div className="use-ref page">
      <div ref={renderTarget} className="scene"></div>
    </div>
  );
});

export default UseRefMemo;
