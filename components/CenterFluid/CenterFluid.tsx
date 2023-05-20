'use client';

import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import {
  Environment,
  PerformanceMonitor,
  useProgress,
} from '@react-three/drei';
import { useLoadingCtx } from '@/components/LoadingComponent/LoadingCtx';

import { Blob } from './Blob';

const CenterFluid = () => {
  // const gpu = useDetectGPU();
  const [dpr, setDpr] = React.useState<number>(1.85);

  const { setIsLoading } = useLoadingCtx();
  const { progress } = useProgress();

  React.useEffect(() => {
    if (progress === 100) {
      setIsLoading(false);
    }
  }, [progress, setIsLoading]);

  return (
    <div className='fixed inset-0 z-0 grid h-screen select-none'>
      <React.Suspense fallback={null}>
        <Canvas
          gl={{
            antialias: false,
            precision: 'lowp',
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
          <ambientLight intensity={0.4} />
          <spotLight position={[-50, 70, 20]} intensity={0.5} />
          <spotLight position={[50, -20, 70]} intensity={0.9} />
          <Environment
            resolution={256}
            // files='/assets/img/threejs/photo_studio_01_1k_compressed.hdr'
            // files='/assets/img/threejs/potsdamer_platz_1k.hdr'
            files='/assets/img/threejs/potsdamer_platz_1k_compressed.hdr'
          />
          <Blob />
        </Canvas>
      </React.Suspense>
    </div>
  );
};

export default CenterFluid;
