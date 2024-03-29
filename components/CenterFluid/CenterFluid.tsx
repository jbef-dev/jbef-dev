'use client';

import * as React from 'react';

import { useLoadingCtx } from '@/components/LoadingComponent/LoadingCtx';
import {
  AdaptiveDpr,
  Environment,
  PerformanceMonitor,
  Preload,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Blob } from './Blob';

const CenterFluid = () => {
  // const gpu = useDetectGPU();
  // const [dpr, setDpr] = React.useState<number>(1.5);
  const [dpr, setDpr] = React.useState<number>(1.0);

  const { setIsLoading } = useLoadingCtx();
  const { progress } = useProgress();

  React.useEffect(() => {
    if (progress === 100) {
      setIsLoading(false);
    }
  }, [progress, setIsLoading]);

  return (
    <div className='fixed inset-0 z-0 grid h-screen select-none'>
      <React.Suspense>
        <Canvas
          gl={{
            antialias: false,
            precision: 'lowp',
          }}
          dpr={dpr}
        // dpr={gpu.tier === 0 || gpu.isMobile ? 1.3 : dpr} // THIS IMPROVES PERFORMANCE
        // dpr={[1, 1.75]} // THIS IMPROVES PERFORMANCE
        >
          <Preload all />
          <AdaptiveDpr pixelated />
          <PerformanceMonitor
            factor={1}
            onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}
          />
          <ambientLight intensity={0.4} />
          {/* <spotLight position={[-50, 70, 20]} intensity={0.5} /> */}
          {/* <spotLight position={[0, 0, 20]} intensity={0.45} /> */}
          <Environment
            resolution={256}
            files='/assets/img/threejs/autoshop_01_1k_small.hdr'
          />
          <Blob />
        </Canvas>
      </React.Suspense>
    </div>
  );
};

export default CenterFluid;
