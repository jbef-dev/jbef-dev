'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { R3Fluid } from './R3Fluid';
import * as React from 'react';
import {
  Environment,
  OrbitControls,
} from '@react-three/drei';
import { Displace, LayerMaterial } from 'lamina';

const CenterFluid = () => {
  return (
    <div className='fixed inset-0 z-10 grid h-screen select-none'>
      <Canvas>
        {/* <OrbitControls /> */}
        {/* <ambientLight intensity={1} /> */}
        {/* <hemisphereLight  groundColor={'white'} intensity={0.9}  /> */}
        <ambientLight intensity={0.2} />
        {/* <Environment files='/assets/img/empty_warehouse_01_1k.hdr' /> */}
        <Environment files='/assets/img/photo_studio_01_1k.hdr' />
        {/* <Environment files='/assets/img/studio_small_09_1k_compressed.hdr' /> */}
        {/* <PerspectiveCamera position={[0, 0, 50]} makeDefault /> */}

        <React.Suspense fallback={null}>
          <R3Fluid />
          {/* <Bubble /> */}
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

const Bubble = () => {
  const ref = React.useRef(null);
  const displaceRef = React.useRef<any>(null);

  const { width } = useThree(state => state.viewport);

  useFrame((_, dt) => {
    if (!displaceRef.current) return;
    displaceRef.current.offset.x += 4 * dt;
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[width / 8, 128, 128]} />
      <LayerMaterial
        color={'black'}
        lighting={'standard'}
        transmission={0.1}
        roughness={0.3}
        thickness={2}
        toneMapped={false}
      >
        <Displace ref={displaceRef} strength={3} scale={0.25} />
      </LayerMaterial>
    </mesh>
  );
};

export { CenterFluid };
