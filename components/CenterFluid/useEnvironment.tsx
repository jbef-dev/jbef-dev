import { useLoader } from '@react-three/fiber';
import {
  EquirectangularReflectionMapping,
  CubeTextureLoader,
  Texture,
  Loader,
  CubeReflectionMapping,
  CubeTexture,
} from 'three';
import { RGBELoader } from './RGBELoader';

export type EnvironmentLoaderProps = {
  files?: string | string[];
  path?: string;
  extensions?: (loader: Loader) => void;
};

export function useEnvironment({
  files = ['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png'],
  path = '',
  extensions,
}: Partial<EnvironmentLoaderProps> = {}) {
  const isCubeMap = Array.isArray(files);
  const loader = isCubeMap ? CubeTextureLoader : RGBELoader;
  // @ts-expect-error
  const loaderResult: Texture | Texture[] = useLoader(
    // @ts-expect-error
    loader,
    isCubeMap ? [files] : files,
    loader => {
      loader.setPath(path);
      if (extensions) extensions(loader);
    }
  );
  const texture: Texture | CubeTexture = isCubeMap
    ? // @ts-ignore
    loaderResult[0]
    : loaderResult;
  texture.mapping = isCubeMap
    ? CubeReflectionMapping
    : EquirectangularReflectionMapping;
  return texture;
}
