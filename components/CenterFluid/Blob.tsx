'use client';

import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';

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

import { customTransitions } from '@/ui/animation';
import { makeNoise4D } from './simplex';

export function Blob() {
  const { height, width } = useThree(state => state.viewport);
  const viewportSmallestSide = Math.min(width, height);
  const viewportAspectRatio = width / height;

  // const gpu = useDetectGPU();

  const { scrollY } = useScroll();

  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 120,
    bounce: 0,
    damping: 60,
  });

  const scrollVelocity = useVelocity(scrollYSmooth);
  const scaleThreshold = viewportAspectRatio > 1 ? 2800 : 2500;
  const scrollThreshold = viewportAspectRatio > 1 ? 1500 : 1100;

  const y = useTransform(
    scrollVelocity,
    [-scrollThreshold, 0, scrollThreshold],
    [-2.2, 0, 2.2],
    {
      clamp: false,
    }
  );

  const circleScaleX = useTransform(
    scrollVelocity,
    [-scaleThreshold, 0, scaleThreshold],
    [0.19, 1, 0.19]
    // {
    //   clamp: false,
    // }
  );
  const sphereScaleX = useTransform(
    scrollVelocity,
    [-scaleThreshold, 0, scaleThreshold],
    [0.2, 1, 0.2]
    // {
    //   clamp: false,
    // }
  );

  const sphereScaleY = useTransform(
    scrollVelocity,
    [-scaleThreshold, 0, scaleThreshold],
    [0.95, 1, 0.95],
    {
      clamp: false,
    }
  );
  const circleScaleY = useTransform(
    scrollVelocity,
    [-scaleThreshold, 0, scaleThreshold],
    [0.89, 1, 0.89],
    {
      clamp: false,
    }
  );

  // CIRCLE IS DEFINED FROM HERE ONWARDS
  // *************************************************************
  const circleMeshRef = React.useRef<THREE.Mesh>(null);
  const circleMaterialRef = React.useRef<THREE.MeshPhysicalMaterial>(null);
  const circleRadius = Math.min(Math.max(viewportSmallestSide / 2.8, 1.5), 2.0);

  // SPHERE IS DEFINED FROM HERE ONWARDS
  // *************************************************************
  const sphereMeshRef = React.useRef<THREE.Mesh>(null);

  const sphereWSegments = 48;
  const sphereHSegments = 48;

  const sphereRadius = Math.min(Math.max(viewportSmallestSide / 2.7, 1.6), 2.1);
  // const sphereSize = circleSize;

  const sphereMaterialRef =
    React.useRef<JSX.IntrinsicElements['meshTransmissionMaterial']>(null);

  const initialIOR = 1.07;
  const initialChromaticAberration = 0.008;
  const initialSphereColor = '#ffffff';
  const initialRotationSpeed = 0;

  const sphereIOR = useMotionValue(initialIOR);
  const sphereChromAberration = useMotionValue(initialChromaticAberration);
  const sphereColor = useMotionValue(initialSphereColor);
  const sphereRotationSpeed = useMotionValue(initialRotationSpeed);

  // MEMOIZING THE NOISE MAKES SO THAT WHEN UPDATING STATE THE NOISE IS PRESERVED AND THERE IS NO JUMP IN THE SPHERE NOISE APPLICATION
  const noise = React.useMemo(() => makeNoise4D(Date.now()), []);
  const initialSimplexScale = 0.1;
  const simplexScale = useMotionValue(initialSimplexScale);

  const sphere_clone = React.useMemo(
    () =>
      new THREE.SphereGeometry(sphereRadius, sphereWSegments, sphereHSegments),
    [sphereRadius]
  );

  const original_pos = sphere_clone.getAttribute(
    'position'
  ) as THREE.BufferAttribute;

  // TRANSITIONS TO HAPPEN BASED ON ACTIVE AREA ON THE PAGE
  // *************************************************************
  const { activeTexture } = useCenterFluidCtx();

  const transitionDuration = 0.75;

  const [currentTexture, setCurrentTexture] =
    React.useState<CenterFluidTexture>({
      name: 'me',
      transitionColor: '#3f3f3f',
    });

  const imgTexture = useLoader(THREE.TextureLoader, [
    '/assets/img/threejs/prueba_perfil_bw.png',
    '/assets/img/threejs/sea.webp',
    '/assets/img/threejs/sea-torrevieja.webp',
  ]);

  // const videoTexture = useVideoTexture('/assets/vid/test_vid.mp4');

  const textures: {
    [k in CenterFluidTexture['name']]: THREE.VideoTexture | THREE.Texture;
  } = React.useMemo(() => {
    const t: {
      [k in CenterFluidTexture['name']]: THREE.VideoTexture | THREE.Texture;
    } = {
      me: imgTexture[0],
      cnglawyers: imgTexture[1],
      guidoaudisio: imgTexture[2],
      // video: videoTexture,
    };
    return t;
  }, [imgTexture]);

  React.useEffect(() => {
    setTimeout(
      () => setCurrentTexture(activeTexture),
      transitionDuration * 1000
    );
  }, [activeTexture]);

  React.useEffect(() => {
    if (currentTexture === activeTexture) {
      animate(sphereIOR, initialIOR, {
        duration: transitionDuration,
      });
      animate(sphereChromAberration, initialChromaticAberration, {
        duration: transitionDuration * 1.5,
      });
      animate(sphereColor, initialSphereColor, {
        duration: transitionDuration,
      });
      animate(sphereRotationSpeed, initialRotationSpeed, {
        duration: transitionDuration,
        ease: 'easeInOut',
      });
      animate(simplexScale, initialSimplexScale, {
        duration: transitionDuration,
      });
    } else if (currentTexture !== activeTexture) {
      animate(sphereIOR, 1.5, { duration: transitionDuration });
      animate(sphereChromAberration, 0.1, {
        duration: transitionDuration,
      });
      // animate(sphereColor, initialColor, { duration: transitionDuration });
      animate(sphereColor, activeTexture.transitionColor, {
        duration: transitionDuration,
      });
      animate(sphereRotationSpeed, 0.04, {
        duration: transitionDuration,
        ease: 'easeInOut',
      });
      animate(simplexScale, 0.25, { duration: transitionDuration });
    }
  }, [
    activeTexture,
    currentTexture,
    simplexScale,
    sphereColor,
    sphereIOR,
    sphereChromAberration,
    sphereRotationSpeed,
  ]);

  useFrame(state => {
    const time = state.clock.getElapsedTime();

    if (circleMeshRef.current) {
      circleMeshRef.current.scale.x = circleScaleX.get();
      circleMeshRef.current.scale.y = circleScaleY.get();
      circleMeshRef.current.position.y = y.get();
    }

    if (sphereMaterialRef.current) {
      sphereMaterialRef.current.ior = sphereIOR.get();
      sphereMaterialRef.current.chromaticAberration =
        sphereChromAberration.get();
      sphereMaterialRef.current.color = new THREE.Color(sphereColor.get());
    }

    if (sphereMeshRef.current) {
      sphereMeshRef.current.scale.x = sphereScaleX.get();
      sphereMeshRef.current.scale.y = sphereScaleY.get();
      sphereMeshRef.current.position.y = y.get();
      sphereMeshRef.current.rotation.x += sphereRotationSpeed.get();

      const geometry = sphereMeshRef.current.geometry;
      const pos = geometry.getAttribute('position') as THREE.BufferAttribute;

      for (let i = 0; i < pos.count; i++) {
        const ix = original_pos.getX(i);
        const iy = original_pos.getY(i);
        const iz = original_pos.getZ(i);

        const simplexSpeed = 0.5;
        const p = new THREE.Vector3(ix, iy, iz);
        const setNoise = noise(ix, iy, iz, time * simplexSpeed);
        const v3 = new THREE.Vector3()
          .copy(p)
          .addScaledVector(p, setNoise * simplexScale.get());

        // const waveX1 = 0.2 * Math.sin(ix + time * 2.3);
        // const waveZ2 = 0.1 * Math.cos(ix + time * 4);
        // // const waveY1 = 0.15 * Math.cos(iy * 2 + time * 2) + 0.1;
        // // const waveZ1 = 0.2 * Math.sin(iz + time * 2) + 0.1;

        pos.setXYZ(i, v3.x, v3.y, v3.z);
        // pos.setZ(i, iz + waveX1 + waveZ2);
      }
      geometry.computeVertexNormals(); // THIS IS HEAVY ON PERFORMANCE
      pos.needsUpdate = true;
    }
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
        transition={{ ...customTransitions.easeOutSlow, delay: 0.25 }}
      >
        <mesh ref={circleMeshRef}>
          <circleGeometry args={[circleRadius, 40]} />
          <meshPhysicalMaterial
            precision={'highp'}
            ref={circleMaterialRef}
            map={textures[currentTexture.name]}
          />
        </mesh>

        <mesh ref={sphereMeshRef}>
          <sphereBufferGeometry
            args={[sphereRadius, sphereWSegments, sphereHSegments]}
          />
          <MeshTransmissionMaterial
            ref={sphereMaterialRef}
            toneMapped={false}
            transmission={1}
            thickness={sphereRadius * 3.5}
            samples={3} // WARNING Performance tuning
            // precision='lowp' // WARNING Performance tuning
            // depthWrite={false} // WARNING Performance tuning
            // chromaticAberration={0.008}
            specularColor='#ffffff'
            temporalDistortion={0}
            distortion={0}
            distortionScale={0}
            anisotropy={0}
            clearcoat={1}
            clearcoatRoughness={0}
            reflectivity={0.28}
            envMapIntensity={1}
          />
        </mesh>
      </motion.group>
    </Float>
  );
}
