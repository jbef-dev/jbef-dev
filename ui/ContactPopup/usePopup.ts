import { useEffect, useState } from 'react';

// type Props = {
//   show: boolean;
//   minimized: boolean;
//   // handleClose: () => void;
// };

// export const useModal = ({ open, handleClose }: Props) => {
export const usePopup = () => {
  const [show, setShow] = useState<boolean>(false);
  const [minimized, setMinimized] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const toggleShow = () => {
    setMinimized(s => !s);
  };

  return {
    show,
    minimized,
    toggleShow,
  };
};
