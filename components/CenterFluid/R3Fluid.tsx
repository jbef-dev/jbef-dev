'use client';

import { MeshProps, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as React from 'react';
import { Mesh, TextureLoader, Vector3 } from 'three';
import { Float, MeshDistortMaterial, useVideoTexture } from '@react-three/drei';

import {
  animate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { motion } from 'framer-motion-3d';

const R3Fluid = () => {
  // reference for mesh
  const sphereMesh = React.useRef<MeshProps>(null);
  // reference for mesh distort
  const distortRef =
    React.useRef<(typeof MeshDistortMaterial)['defaultProps']>(null);

  // const { viewport } = useThree();
  const { height, width } = useThree(state => state.viewport);

  const viewportSmallestSide = Math.min(width, height);

  const sphereSize = Math.min(Math.max(viewportSmallestSide / 2.6, 1.5), 2.4);

  const { scrollY } = useScroll();

  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 260,
    bounce: 0,
    damping: 100,
  });

  const scrollVelocity = useVelocity(scrollYSmooth);

  const meshY = useTransform(scrollVelocity, [-1500, 0, 1500], [-2.5, 0, 2.5], {
    clamp: false,
  });

  const meshScaleX = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.75, 1, 0.75],
    {
      clamp: false,
    }
  );

  const meshScaleY = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.9, 1, 0.9],
    {
      clamp: false,
    }
  );

  const [clicked, setClicked] = React.useState(false);

  const distortMotionValue = useMotionValue(0.3);
  const thicknessMotionValue = useMotionValue(2);
  const roughnessMotionValue = useMotionValue(0);
  const transmissionMotionValue = useMotionValue(1);

  const sphereRotation = useMotionValue(0);

  React.useEffect(() => {
    if (clicked) {
      animate(distortMotionValue, 0.6, { duration: 1 });
      animate(thicknessMotionValue, 9, { duration: 1 });
      animate(roughnessMotionValue, 0.7, { duration: 1 });
      animate(transmissionMotionValue, 0.2, { duration: 1 });
      animate(sphereRotation, Math.PI * 2, {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      });
    } else {
      animate(distortMotionValue, 0.4, { duration: 1 });
      animate(thicknessMotionValue, sphereSize * 1.3, { duration: 1 });
      animate(roughnessMotionValue, 0, { duration: 1 });
      animate(transmissionMotionValue, 1, { duration: 1 });
      animate(sphereRotation, 0, { duration: 1 });
    }
  }, [clicked, sphereSize]);

  useFrame((state, delta, xFrame) => {
    if (!distortRef.current) return;
    distortRef.current.distort = distortMotionValue.get();
    distortRef.current.thickness = thicknessMotionValue.get();
    distortRef.current.roughness = roughnessMotionValue.get();
    distortRef.current.transmission = transmissionMotionValue.get();

    if (!sphereMesh.current) return;
  });

  const vidTexture = useVideoTexture('/assets/vid/test_vid.mp4');
  const imgTexture = useLoader(TextureLoader, [
    '/assets/img/prueba_perfil.png',
    '/assets/img/sea.webp',
  ]);
  const textures = [vidTexture, ...imgTexture];

  return (
    <Float
      speed={5} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.2, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <motion.group
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        position={[0, meshY, 0]}
        // rotation={[30, 30, 30]}
        transition={{ type: 'keyframes', ease: 'easeOut', duration: 0.9 }}
      >
        <motion.mesh scale={[meshScaleX, meshScaleY, 1]}>
          <circleGeometry args={[sphereSize - 0.1, 64, 64]} />
          <motion.meshPhysicalMaterial map={textures[1]} />
        </motion.mesh>

        <motion.mesh
          ref={sphereMesh}
          scale={[meshScaleX, meshScaleY, 1]}
          onClick={() => setClicked(h => !h)}
          rotation={[0, sphereRotation, 0]}
        >
          <motion.sphereBufferGeometry
            attach='geometry'
            args={[sphereSize, 128, 128]}
          />

          <MeshDistortMaterial
            ref={distortRef}
            attach='material'
            // roughness={0} // applied in useFrame
            // thickness={2} // applied in useFrame
            // distort={0.3} // applied in useFrame
            // transmission={1} // applied in useFrame
            speed={2} // doesn't apply correctly in useFrame
            toneMapped={false}
            clearcoat={0.3}
            clearcoatRoughness={0}
            color='white'
            reflectivity={0.12}
            envMapIntensity={0.1}
            ior={1.13}
          />
        </motion.mesh>
      </motion.group>
    </Float>
  );
};

export { R3Fluid };
