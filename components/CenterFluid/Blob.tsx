'use client';

import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as React from 'react';
import * as THREE from 'three';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';

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
import { Displace, LayerMaterial } from 'lamina';

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

  const circleScaleX = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.68, 1, 0.68],
    {
      clamp: false,
    }
  );
  const sphereScaleX = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.75, 1, 0.75],
    {
      clamp: false,
    }
  );

  const sphereScaleY = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.9, 1, 0.9],
    {
      clamp: false,
    }
  );
  const circleScaleY = useTransform(
    scrollVelocity,
    [-1500, 0, 1500],
    [0.87, 1, 0.87],
    {
      clamp: false,
    }
  );

  // CIRCLE IS DEFINED FROM HERE ONWARDS
  // *************************************************************
  const imgRef = React.useRef<THREE.Mesh>(null);

  const circleMeshRef = React.useRef<THREE.Mesh>(null);
  const circleMaterialRef = React.useRef<THREE.MeshBasicMaterial>(null);
  const circleSize = Math.min(Math.max(viewportSmallestSide / 2.8, 1.7), 2.5);

  // SPHERE IS DEFINED FROM HERE ONWARDS
  // *************************************************************
  const sphereMeshRef = React.useRef<THREE.Mesh>(null);
  const sphereMaterialRef =
    React.useRef<(typeof MeshTransmissionMaterial)['defaultProps']>(null);
  // const sphereGeometryRef = React.useRef<THREE.SphereGeometry>(null);
  // const sphereGeometryRef = React.useRef<THREE.SphereGeometry>(null);

  // const sphereSize = Math.min(Math.max(viewportSmallestSide / 2.8, 1.7), 2.5);
  const sphereSize = circleSize;

  const initialDistort = 0.28;
  const initialThickness = 5;
  const initialColor = '#000000';

  const sphereDistort = useMotionValue(initialDistort);
  const sphereThickness = useMotionValue(initialThickness);
  const sphereColor = useMotionValue(initialColor);
  const sphereRotationSpeed = useMotionValue(0);

  // MEMOIZING THE NOISE MAKES SO THAT WHEN UPDATING STATE THE NOISE IS PRESERVED AND THERE IS NO JUMP IN THE SPHERE NOISE APPLICATION
  const noise = React.useMemo(() => makeNoise4D(Date.now()), []);
  const initialSimplexScale = 0.06;
  const initialSimplexSpeed = 0.2;
  const simplexScale = useMotionValue(initialSimplexScale);
  const simplexSpeed = useMotionValue(initialSimplexSpeed);

  const sphere_clone = React.useMemo(
    () => new THREE.SphereGeometry(sphereSize, 128, 128),
    [sphereSize]
  );

  const original_pos = sphere_clone.getAttribute(
    'position'
  ) as THREE.BufferAttribute;

  // TRANSITIONS TO HAPPEN BASED ON ACTIVE AREA ON THE PAGE
  // *************************************************************
  const { activeTexture } = useCenterFluidCtx();

  const transitionDuration = 0.75;

  const [currentTexture, setCurrentTexture] =
    React.useState<CenterFluidTexture>('me');

  const imgTexture = useLoader(THREE.TextureLoader, [
    '/assets/img/threejs/prueba_perfil_bw.png',
    '/assets/img/threejs/sea.webp',
    '/assets/img/threejs/sea-torrevieja.webp',
  ]);

  const textures: {
    [k in CenterFluidTexture]: THREE.VideoTexture | THREE.Texture;
  } = React.useMemo(() => {
    return {
      me: imgTexture[0],
      cnglawyers: imgTexture[1],
      guidoaudisio: imgTexture[2],
    };
  }, [imgTexture]);

  React.useEffect(() => {
    console.log('RENDERING BLOB');
  }, []);

  React.useEffect(() => {
    setTimeout(
      () => setCurrentTexture(activeTexture),
      transitionDuration * 1000
    );
  }, [activeTexture]);

  React.useEffect(() => {
    if (currentTexture === activeTexture) {
      animate(sphereDistort, initialDistort, { duration: transitionDuration });
      animate(sphereThickness, initialThickness, {
        duration: transitionDuration,
      });
      animate(sphereColor, '#ffffff', { duration: transitionDuration });
      animate(sphereRotationSpeed, 0, {
        duration: transitionDuration,
        ease: 'easeInOut',
      });
      animate(simplexScale, initialSimplexScale, {
        duration: transitionDuration,
      });
    } else if (currentTexture !== activeTexture) {
      animate(sphereDistort, 0.45, { duration: transitionDuration });
      animate(sphereThickness, 10, { duration: transitionDuration });
      animate(sphereColor, initialColor, { duration: transitionDuration });
      animate(sphereRotationSpeed, 0.05, {
        duration: transitionDuration,
        ease: 'easeInOut',
      });
      animate(simplexScale, 0.15, { duration: transitionDuration });
    }
  }, [activeTexture, currentTexture]);

  // (state, delta, xrFrame) => null
  useFrame(state => {
    const time = state.clock.getElapsedTime();

    // if (circleMaterialRef.current) {
    // circleMaterialRef.current.map = textures[currentTexture];
    // circleMaterialRef.current.needsUpdate = true;
    // }

    if (circleMeshRef.current) {
      circleMeshRef.current.scale.x = circleScaleX.get();
      circleMeshRef.current.scale.y = circleScaleY.get();
      circleMeshRef.current.position.y = y.get();
    }

    if (sphereMaterialRef.current) {
      sphereMaterialRef.current.thickness = sphereThickness.get();
      sphereMaterialRef.current.color = new THREE.Color(sphereColor.get());
    }

    if (sphereMeshRef.current) {
      sphereMeshRef.current.scale.x = sphereScaleX.get();
      sphereMeshRef.current.scale.y = sphereScaleY.get();
      sphereMeshRef.current.position.y = y.get();
      sphereMeshRef.current.rotation.x -= sphereRotationSpeed.get();

      const geometry = sphereMeshRef.current.geometry;
      const pos = geometry.getAttribute('position') as THREE.BufferAttribute;

      for (let i = 0; i < pos.count; i++) {
        // const x = pos.getX(i);
        // const y = pos.getY(i);
        // const z = pos.getZ(i);

        const ix = original_pos.getX(i);
        const iy = original_pos.getY(i);
        const iz = original_pos.getZ(i);

        const p = new THREE.Vector3(ix, iy, iz);
        const setNoise = noise(ix, iy, iz, time * simplexSpeed.get());
        const v3 = new THREE.Vector3()
          .copy(p)
          .addScaledVector(p, setNoise * simplexScale.get());

        // const waveX1 = 0.1 * Math.sin(ix + time * 2);
        // // const waveY1 = 0.1 * Math.cos(iy * 2 + time * 2);
        // const waveZ1 = 0.1 * Math.cos(iz + time * 2);

        pos.setXYZ(i, v3.x, v3.y, v3.z);
        // pos.setXYZ(i, ix, iy, iz);
        // pos.setZ(i, iz + waveZ1 + waveX1);
      }

      geometry.computeVertexNormals();
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
        transition={{ type: 'keyframes', ease: 'easeOut', duration: 0.9 }}
      >
        <mesh ref={circleMeshRef}>
          <circleGeometry args={[circleSize, 40]} />
          <meshBasicMaterial
            ref={circleMaterialRef}
            map={textures[currentTexture]}
          />
        </mesh>

        <mesh ref={sphereMeshRef}>
          <sphereBufferGeometry args={[sphereSize, 128, 128]} />

          <MeshTransmissionMaterial
            ref={sphereMaterialRef}
            //   onBeforeCompile={(shader: THREE.Shader) => {
            //     shader.uniforms = {
            //       ...shader.uniforms,
            //       ...{
            //         distortTime: { value: 0.5 },
            //         simplexDistort: { value: 0.4 },
            //         radius: { value: 1 },
            //       },
            //     };
            //
            //     shader.vertexShader = `
            // uniform float distortTime;
            // uniform float radius;
            // uniform float simplexDistort;
            // ${distort}
            // ${shader.vertexShader}
            // `;
            //
            //     shader.vertexShader = shader.vertexShader.replace(
            //       '#include <begin_vertex>',
            //       `
            //   float updateTime = distortTime / 50.0;
            //   float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
            //   vec3 transformed = vec3(position * (noise * pow(simplexDistort, 2.0) + radius));
            //   `
            //     );
            //     // shader.fragmentShader = shader.fragmentShader;
            //   }}
            toneMapped={false}
            transmission={1}
            samples={3}
            chromaticAberration={0}
            specularColor='#ffffff'
            temporalDistortion={0}
            distortion={0}
            distortionScale={0}
            anisotropy={0}
            clearcoat={1}
            clearcoatRoughness={0}
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
