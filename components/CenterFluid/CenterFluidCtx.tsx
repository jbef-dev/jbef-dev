'use client';

import * as React from 'react';

type TextureName = 'me' | 'cnglawyers' | 'guidoaudisio';
type CenterFluidTexture = {
  name: TextureName;
  transitionColor: string;
};

interface ICenterFluidCtx {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  activeTexture: CenterFluidTexture;
  setActiveTexture: React.Dispatch<React.SetStateAction<CenterFluidTexture>>;
}
const CenterFluidCtx = React.createContext<ICenterFluidCtx>(
  {} as ICenterFluidCtx
);

const useCenterFluidCtx = () =>
  React.useContext<ICenterFluidCtx>(CenterFluidCtx);

const CenterFluidProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [activeTexture, setActiveTexture] = React.useState<CenterFluidTexture>({
    name: 'me',
    transitionColor: '#3f3f3f',
  });

  return (
    <CenterFluidCtx.Provider
      value={{
        isVisible,
        setIsVisible,
        activeTexture,
        setActiveTexture,
      }}
    >
      {children}
    </CenterFluidCtx.Provider>
  );
};

export { CenterFluidProvider, useCenterFluidCtx, type CenterFluidTexture };
