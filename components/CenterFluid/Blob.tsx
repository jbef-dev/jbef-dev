'use client';

import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import {
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  useVideoTexture,
} from '@react-three/drei';

import {
  animate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { CenterFluidTexture, useCenterFluidCtx } from './CenterFluidCtx';
import { makeNoise4D } from './simplex';

const Blob = () => {
  // reference for sphere mesh
  // const sphereMesh = React.useRef<MeshProps>(null);
  const sphereRef = React.useRef<THREE.Mesh>(null);
  const circleRef = React.useRef<THREE.Mesh>(null);
  // reference for mesh distort
  const sphereMaterialRef =
    React.useRef<(typeof MeshDistortMaterial)['defaultProps']>(null);
  const sphereGeometryRef = React.useRef<THREE.SphereGeometry>(null);

  const { height, width } = useThree(state => state.viewport);
  const viewportSmallestSide = Math.min(width, height);
  const sphereSize = Math.min(Math.max(viewportSmallestSide / 2.8, 1.7), 2.5);

  const { scrollY } = useScroll();

  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 260,
    bounce: 0,
    damping: 100,
  });

  const scrollVelocity = useVelocity(scrollYSmooth);

  const y = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [-2.5, 0, 2.5],
    {
      clamp: false,
    }
  );

  const scaleX = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.75, 1, 0.75],
    {
      clamp: false,
    }
  );

  const scaleY = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.9, 1, 0.9],
    {
      clamp: false,
    }
  );


  const distort = useMotionValue(0.28);
  const thickness = useMotionValue(2);
  const roughness = useMotionValue(0);
  const transmission = useMotionValue(1);

  const sphereRotation = useMotionValue(0);

  const { activeTexture } = useCenterFluidCtx();

  const transitionDuration = 1;

  const [currentTexture, setCurrentTexture] =
    React.useState<CenterFluidTexture>('me');

  React.useEffect(() => {
    setTimeout(
      () => setCurrentTexture(activeTexture),
      (transitionDuration * 1000) / 2
    );
  }, [activeTexture]);

  const vidTexture = useVideoTexture('/assets/vid/test_vid.mp4');
  const imgTexture = useLoader(THREE.TextureLoader, [
    '/assets/img/prueba_perfil_bw.png',
    // '/assets/img/prueba_perfil.png',
    '/assets/img/sea.webp',
  ]);
  // const textures = [vidTexture, ...imgTexture];
  const textures: {
    [k in CenterFluidTexture]: THREE.VideoTexture | THREE.Texture;
  } = {
    me: imgTexture[0],
    cnglawyers: imgTexture[1],
    guidoaudisio: vidTexture,
  };


  React.useEffect(() => {
    animate(distort, 0.45, { duration: transitionDuration }).then(() =>
      animate(distort, 0.28, { duration: transitionDuration })
    );
    animate(thickness, 35, { duration: transitionDuration }).then(() =>
      animate(thickness, 2, { duration: transitionDuration })
    );
    animate(transmission, 0.1, { duration: transitionDuration }).then(() =>
      animate(transmission, 1, { duration: transitionDuration })
    );
    // animate(distortionScale, 6, { duration: transitionDuration }).then(() =>
    //   animate(distortionScale, 0.1, { duration: transitionDuration })
    // );
    animate(sphereRotation, Math.PI * 2, {
      duration: transitionDuration,
      ease: 'easeInOut',
    }).then(() =>
      animate(sphereRotation, 0, {
        duration: transitionDuration,
        ease: 'easeInOut',
      })
    );
  }, [activeTexture]);


  // const position_clone =  (JSON.parse(JSON.stringify(sphereGeometryRef.current?.attributes.position.array||'')) as Float32Array);

  const sphere_clone = new THREE.SphereGeometry(sphereSize, 128, 128);

  const noise = makeNoise4D(Date.now())

  useFrame((state, delta, xrFrame) => {
    const time = state.clock.getElapsedTime();

    if (!sphereMaterialRef.current) return;
    sphereMaterialRef.current.distort = distort.get();
    sphereMaterialRef.current.thickness = thickness.get();
    sphereMaterialRef.current.roughness = roughness.get();
    sphereMaterialRef.current.transmission = transmission.get();
    // distortRef.current.displacementScale = displacementScale.get();
    // distortRef.current.distortionScale = distortionScale.get();

    if (!sphereRef.current) return;
    sphereRef.current.scale.x = scaleX.get();
    sphereRef.current.scale.y = scaleY.get();
    sphereRef.current.position.y = y.get();
    sphereRef.current.rotation.y = sphereRotation.get()

    if (!circleRef.current) return;
    circleRef.current.scale.x = scaleX.get();
    circleRef.current.scale.y = scaleY.get();
    circleRef.current.position.y = y.get();

    if (!sphereGeometryRef.current) return;
    const original_pos = sphere_clone.getAttribute(
      'position'
    ) as THREE.BufferAttribute;
    const pos = sphereGeometryRef.current.getAttribute(
      'position'
    ) as THREE.BufferAttribute;
    // const normal = sphereGeometryRef.current.getAttribute(
    //   'position'
    // ) as THREE.BufferAttribute;
    // const uv = sphereGeometryRef.current.getAttribute(
    //   'position'
    // ) as THREE.BufferAttribute;

    const distortionScale = 0.10;
    for (let i = 0; i < pos.count; i++) {

      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      const ix = original_pos.getX(i);
      const iy = original_pos.getY(i);
      const iz = original_pos.getZ(i);

      const p = new THREE.Vector3(ix, iy, iz)
      const setNoise = noise(ix, iy, iz, time * 0.5)

      const v3 = new THREE.Vector3().copy(p).addScaledVector(p, setNoise * 0.05)

      // const waveX1 = distortionScale * Math.sin(x * 2 + time * 2);
      // const waveY1 = distortionScale * Math.cos(y * 2 + time * 2);
      // const waveZ1 = distortionScale * Math.cos(iz * 2 + time * 2);

      // const xSin = enlarge * Math.sin(x * 2 + delta) + enlarge;
      // const ySin = enlarge * Math.sin(y * 2 + time) + enlarge;
      // const zSin = enlarge * Math.sin(z * 2 + time) + enlarge;

      // const x = r * Math.sin(a) * Math.cos(b);
      // a+b=Math.PI/2
      // r=10
      // x=3

      pos.setXYZ(i, v3.x, v3.y, v3.z);

      // pos.setZ(i, iz + waveX1 + waveY1 + waveZ1);

      // pos.setZ(i, simplex(ix,iy,iz) );
      // pos.setX(i, x);
      // pos.setY(i, y);
      // pos.setZ(i, z + 0.01);
    }
    sphereGeometryRef.current.computeVertexNormals();
    pos.needsUpdate = true;
  });

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
        // position={[0, meshY, 0]}
        transition={{ type: 'keyframes', ease: 'easeOut', duration: 0.9 }}
      >
        <mesh ref={circleRef}>
          <circleGeometry args={[sphereSize, 64, 64]} />
          <meshPhysicalMaterial map={textures[currentTexture]} />
        </mesh>

        <mesh ref={sphereRef}>
          <sphereBufferGeometry
            ref={sphereGeometryRef}
            args={[sphereSize, 128, 128]}
          />
          <MeshTransmissionMaterial
            ref={sphereMaterialRef}
            toneMapped={false}
            chromaticAberration={0.01}
            specularIntensity={1}
            specularColor={'#ffffff'}
            temporalDistortion={0.1}
            distortion={0.3}
            distortionScale={0.1}
            anisotropy={0}
            clearcoat={1}
            clearcoatRoughness={0}
            color='white'
            reflectivity={0.2}
            envMapIntensity={0.7}
            ior={1.13}
          />
        </mesh>
      </motion.group>
    </Float>
  );
};

export { Blob };
