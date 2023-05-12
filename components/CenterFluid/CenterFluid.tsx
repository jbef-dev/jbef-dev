'use client';

import { Canvas } from '@react-three/fiber';
import { Blob } from './Blob';
import * as React from 'react';
import {
  Environment,
  Loader,
  PerformanceMonitor,
  Stats,
} from '@react-three/drei';

const CenterFluid = () => {
  // const gpu = useDetectGPU();
  const [dpr, setDpr] = React.useState<number>(2);

  return (
    <div className='fixed inset-0 z-10 grid h-screen select-none'>
      <Canvas
        gl={{
          antialias: false,
          // depth: false,
          precision: 'lowp',
          // stencil: false,
        }}
        dpr={dpr}
        // dpr={gpu.tier === 0 || gpu.isMobile ? 1.3 : dpr} // THIS IMPROVES PERFORMANCE
        // dpr={[1, 1.75]} // THIS IMPROVES PERFORMANCE
      >
        <PerformanceMonitor
          factor={1}
          onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}
        />
        <Stats showPanel={0} />

        {/* <OrbitControls /> */}
        {/* <ambientLight intensity={1} /> */}
        {/* <ambientLight intensity={0.25} /> */}
        <Environment
          resolution={512}
          files='/assets/img/threejs/photo_studio_01_1k_compressed.hdr'
        />
        {/* <AdaptiveDpr pixelated /> */}

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
      <Loader />
    </div>
  );
};

export { CenterFluid };
