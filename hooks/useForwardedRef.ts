import { useEffect, useRef } from 'react';

const useForwardedRef = <T>(ref: React.ForwardedRef<T>) => {
  const innerRef = useRef<T>(null);
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });
  return innerRef;
};

export default useForwardedRef;
