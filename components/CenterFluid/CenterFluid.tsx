'use client';

import { Canvas } from '@react-three/fiber';
import { Blob } from './Blob';
import * as React from 'react';
import {
  Environment,
  PerformanceMonitor,
  Stats,
  useProgress,
} from '@react-three/drei';
import { motion } from 'framer-motion';

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <motion.div className='fixed inset-0 z-50 flex items-center justify-center bg-black text-center font-title text-responsive-2xl text-white'>
      Loading {progress}%
    </motion.div>
  );
};

const CenterFluid = () => {
  // const gpu = useDetectGPU();
  const [dpr, setDpr] = React.useState<number>(2);

  return (
    <div className='fixed inset-0 z-0 grid h-screen select-none'>
      <React.Suspense fallback={<Loader />}>
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
          {/* <Stats showPanel={0} /> */}
          <PerformanceMonitor
            factor={1}
            onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}
          />
          <Environment
            resolution={512}
            files='/assets/img/threejs/photo_studio_01_1k_compressed.hdr'
          />
          <Blob />
        </Canvas>
      </React.Suspense>
    </div>
  );
};

export { CenterFluid };
