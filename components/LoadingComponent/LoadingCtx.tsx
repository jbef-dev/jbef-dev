'use client';

import * as React from 'react';

interface ILoadingCtx {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}
const LoadingCtx = React.createContext<ILoadingCtx>({} as ILoadingCtx);

const useLoadingCtx = () => React.useContext<ILoadingCtx>(LoadingCtx);

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  return (
    <LoadingCtx.Provider
      value={{
        isLoading,
        setIsLoading,
        progress,
        setProgress,
      }}
    >
      {children}
    </LoadingCtx.Provider>
  );
};

export { LoadingProvider, useLoadingCtx };
