'use client';

import { Canvas } from '@react-three/fiber';
import { Blob } from './Blob';
import * as React from 'react';
import { Environment, OrbitControls, Stats } from '@react-three/drei';

const CenterFluid = () => {
  return (
    <div className='fixed inset-0 z-10 grid h-screen select-none'>
      <Canvas
        gl={{
          powerPreference: 'low-power',
          antialias: true,
          precision: 'mediump',
        }}
      >
        {/* <Stats showPanel={2} /> */}

        {/* <OrbitControls /> */}
        {/* <ambientLight intensity={1} /> */}
        {/* <ambientLight intensity={0.25} /> */}
        <Environment
          // resolution={0.1}
          files='/assets/img/threejs/photo_studio_01_1k_compressed.hdr'
        />

        <React.Suspense fallback={null}>
          <Blob />
        </React.Suspense>

        {/* <spotLight intensity={0.5} receiveShadow castShadow position={[-20, 40, 10]} /> */}
        {/* <pointLight intensity={0.9} position={[10, 10, -130]} /> */}
        {/* <pointLight intensity={0.8} position={[-60, 40, -270]} /> */}
        {/* <pointLight intensity={0.3} castShadow position={[90, 10, -280]} /> */}
        {/* <pointLight intensity={0.5} position={[80, 90, 30]} /> */}
        {/* <pointLight intensity={1} color='white' position={[-60, -10, 70]} /> */}
        {/* <directionalLight intensity={0.2} position={[-40, 40, 15]} /> */}
      </Canvas>
    </div>
  );
};

export { CenterFluid };
