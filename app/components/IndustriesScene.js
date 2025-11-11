"use client";

import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useRef, useLayoutEffect } from 'react';

function Model() {
  // --- IMPORTANT ---
  // Change '/dna.glb' to the path of your ne
  // w model!
  // I'm using '/dna.glb' as a placeholder.
  const modelRef1 = useRef();
  const { scene } = useGLTF('/protein2_1bna.glb');
  const {camera} = useThree();

  useLayoutEffect(() => {
    camera.position.set(0, 0, 60);
  })
  return <primitive object={scene} scale={1} />; // Adjust scale as needed
}

export default function IndustriesScene() {
  return (
    <Canvas>
      {/* We add a Suspense fallback in case the model takes time to load */}
      
      <Suspense fallback={null}>
        <Model  />
        {/*
          This is exactly what you wanted:
          - Just OrbitControls to let the user drag/rotate.
          - No scroll-hijacking (enableZoom={false}).
          - No auto-rotation. It's a simple, separate scene.
        */}
        <OrbitControls enableZoom={false} autoRotate enablePan={false} />
        
        {/* Environment adds simple, nice lighting */}
        <ambientLight intensity={2} />
      </Suspense>
    </Canvas>
  );
}