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
  const { height, width } = useThree(state => state.viewport);
  const viewportSmallestSide = Math.min(width, height);

  const { scrollY } = useScroll();

  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 260,
    bounce: 0,
    damping: 100,
  });

  const scrollVelocity = useVelocity(scrollYSmooth);

  const y = useTransform(scrollVelocity, [-1500, 0, 1500], [-2.5, 0, 2.5], {
    clamp: false,
  });

  const scaleX = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.75, 1, 0.75],
    {
      clamp: false,
    }
  );

  const scaleY = useTransform(scrollVelocity, [-1500, 0, 1500], [0.9, 1, 0.9], {
    clamp: false,
  });

  // CIRCLE IS DEFINED FROM HERE ONWARDS
  // *************************************************************
  const circleMeshRef = React.useRef<THREE.Mesh>(null);
  const circleMaterialRef = React.useRef<THREE.MeshPhysicalMaterial>(null);
  const circleSize = Math.min(Math.max(viewportSmallestSide / 2.8, 1.7), 2.5);

  const initialCircleOpacity = 1;
  const circleOpacity = useMotionValue(initialCircleOpacity);

  // SPHERE IS DEFINED FROM HERE ONWARDS
  // *************************************************************
  const sphereMeshRef = React.useRef<THREE.Mesh>(null);
  const sphereMaterialRef =
    React.useRef<(typeof MeshDistortMaterial)['defaultProps']>(null);
  const sphereGeometryRef = React.useRef<THREE.SphereGeometry>(null);

  // const sphereSize = Math.min(Math.max(viewportSmallestSide / 2.8, 1.7), 2.5);
  const sphereSize = circleSize;

  const initialDistort = 0.28;
  const initialThickness = 5;
  const initialColor = '#000000';

  const sphereDistort = useMotionValue(initialDistort);
  const sphereThickness = useMotionValue(initialThickness);
  const sphereColor = useMotionValue(initialColor);
  const sphereRotationSpeed = useMotionValue(0);

  const initialSimplexScale = 0.06;
  const initialSimplexSpeed = 0.5;

  // MEMOIZING THE NOISE MAKES SO THAT WHEN UPDATING STATE THE NOISE IS PRESERVED AND THERE IS NO JUMP IN THE SPHERE NOISE APPLICATION
  const noise = React.useMemo(() => makeNoise4D(Date.now()), []);

  const simplexScale = useMotionValue(initialSimplexScale);
  const simplexSpeed = useMotionValue(initialSimplexSpeed);

  const sphere_clone = React.useMemo(
    () => new THREE.SphereGeometry(sphereSize, 128, 128),
    [sphereSize]
  );

  // TRANSITIONS TO HAPPEN BASED ON ACTIVE AREA ON THE PAGE
  // *************************************************************
  const { activeTexture } = useCenterFluidCtx();

  const transitionDuration = 0.75;

  const [currentTexture, setCurrentTexture] =
    React.useState<CenterFluidTexture>('me');

  const vidTexture = useVideoTexture('/assets/vid/test_vid.mp4');
  const imgTexture = useLoader(THREE.TextureLoader, [
    '/assets/img/prueba_perfil_bw.png',
    // '/assets/img/prueba_perfil.png',
    '/assets/img/sea.webp',
  ]);

  const textures: {
    [k in CenterFluidTexture]: THREE.VideoTexture | THREE.Texture;
  } = React.useMemo(() => {
    return {
      me: imgTexture[0],
      cnglawyers: imgTexture[1],
      guidoaudisio: vidTexture,
    };
  }, []);

  React.useEffect(() => {
    setTimeout(
      () => setCurrentTexture(activeTexture),
      transitionDuration * 1000
    );
  }, [activeTexture]);

  React.useEffect(() => {
    animate(sphereDistort, 0.45, { duration: transitionDuration }).then(() =>
      animate(sphereDistort, initialDistort, { duration: transitionDuration })
    );
    animate(sphereThickness, 35, { duration: transitionDuration }).then(() =>
      animate(sphereThickness, initialThickness, {
        duration: transitionDuration,
      })
    );
    animate(sphereColor, initialColor, { duration: transitionDuration }).then(
      () => animate(sphereColor, '#ffffff', { duration: transitionDuration })
    );
    animate(sphereRotationSpeed, 0.05, {
      duration: transitionDuration,
      ease: 'easeInOut',
    }).then(() =>
      animate(sphereRotationSpeed, 0, {
        duration: transitionDuration,
        ease: 'easeInOut',
      })
    );

    animate(simplexScale, 0.15, { duration: transitionDuration }).then(() =>
      animate(simplexScale, initialSimplexScale, {
        duration: transitionDuration,
      })
    );

    animate(circleOpacity, 0, { duration: transitionDuration }).then(() =>
      animate(circleOpacity, initialCircleOpacity, {
        duration: transitionDuration,
      })
    );
  }, [activeTexture]);

  useFrame((state, delta, xrFrame) => {
    const time = state.clock.getElapsedTime();
    if (!circleMaterialRef.current) return;
    circleMaterialRef.current.opacity = circleOpacity.get();

    if (!sphereMaterialRef.current) return;
    sphereMaterialRef.current.distort = sphereDistort.get();
    sphereMaterialRef.current.thickness = sphereThickness.get();
    // sphereMaterialRef.current.roughness = roughness.get();
    sphereMaterialRef.current.color = new THREE.Color(sphereColor.get());

    if (!sphereMeshRef.current) return;
    sphereMeshRef.current.scale.x = scaleX.get();
    sphereMeshRef.current.scale.y = scaleY.get();
    sphereMeshRef.current.position.y = y.get();
    sphereMeshRef.current.rotation.x -= sphereRotationSpeed.get();

    if (!circleMeshRef.current) return;
    circleMeshRef.current.scale.x = scaleX.get();
    circleMeshRef.current.scale.y = scaleY.get();
    circleMeshRef.current.position.y = y.get();

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

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      const ix = original_pos.getX(i);
      const iy = original_pos.getY(i);
      const iz = original_pos.getZ(i);

      const p = new THREE.Vector3(ix, iy, iz);
      const setNoise = noise(ix, iy, iz, time * simplexSpeed.get());

      const v3 = new THREE.Vector3()
        .copy(p)
        .addScaledVector(p, setNoise * simplexScale.get());

      // const waveX1 = distortionScale * Math.sin(x * 2 + time * 2);
      // const waveY1 = distortionScale * Math.cos(y * 2 + time * 2);
      // const waveZ1 = distortionScale * Math.cos(iz * 2 + time * 2);

      // const xSin = enlarge * Math.sin(x * 2 + delta) + enlarge;
      // const ySin = enlarge * Math.sin(y * 2 + time) + enlarge;
      // const zSin = enlarge * Math.sin(z * 2 + time) + enlarge;

      pos.setXYZ(i, v3.x, v3.y, v3.z);
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
        <mesh ref={circleMeshRef}>
          <circleGeometry args={[circleSize, 64, 64]} />
          <meshPhysicalMaterial
            ref={circleMaterialRef}
            transparent
            map={textures[currentTexture]}
          />
        </mesh>

        <mesh ref={sphereMeshRef}>
          <sphereBufferGeometry
            ref={sphereGeometryRef}
            args={[sphereSize, 128, 128]}
          />
          <MeshTransmissionMaterial
            ref={sphereMaterialRef}
            toneMapped={false}
            transmission={1}
            chromaticAberration={0.01}
            specularIntensity={1}
            specularColor='#ffffff'
            temporalDistortion={0.1}
            distortion={0.2}
            distortionScale={0.1}
            anisotropy={0}
            backside
            // backsideResolution={3}
            clearcoat={1}
            clearcoatRoughness={0}
            // color='white'
            reflectivity={0.3}
            envMapIntensity={0.7}
            ior={1.07}
          />
        </mesh>
      </motion.group>
    </Float>
  );
};

export { Blob };
