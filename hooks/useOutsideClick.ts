import { RefObject, useEffect } from 'react';

const useOutsideClick = (
  callback: (...props: any) => void,
  open: boolean,
  ref: RefObject<any>
) => {
  useEffect(() => {
    /** Alert if mouse down on outside of element */
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (open === true || open === undefined) &&
        ref &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        callback();
      }
    };

    /** Alert if touch starts on outside of element */
    const handleTouchOutside = (e: TouchEvent) => {
      if (
        (open === true || open === undefined) &&
        ref &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [ref, open]);
};

export default useOutsideClick;
