'use client';

import * as React from 'react';

type CenterFluidTexture = 'me' | 'cnglawyers' | 'guidoaudisio';

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
  const [activeTexture, setActiveTexture] =
    React.useState<CenterFluidTexture>('me');

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
