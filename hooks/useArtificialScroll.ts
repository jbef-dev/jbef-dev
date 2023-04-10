import { customSprings } from '@/ui/animation';
import { SpringOptions, useSpring } from 'framer-motion';
import { useEffect, useLayoutEffect, useState } from 'react';

const useArtificialScroll = (
  springOptions?: SpringOptions,
  moveDelay?: number
) => {
  // *************************************** SMOOTH SCROLL *****************************

  const springFiltered = springOptions || customSprings.fast;
  const moveDelayFiltered = moveDelay || 20;

  // const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMoved, setIsMoved] = useState(false);
  let touchStartY = 0;

  const targetWithinBounds = (newTarget: number) => {
    if (newTarget < 0) return 0;
    if (newTarget > document.body.scrollHeight)
      return document.body.scrollHeight;
    return newTarget;
  };

  const artificialScrollY = useSpring(0, springFiltered);

  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const newTarget = artificialScrollY.get() + e.deltaY;
    setTimeout(() => {
      artificialScrollY.set(targetWithinBounds(newTarget));
    }, 20);
  };

  const ontouchStart = (e: TouchEvent) => {
    // setTouchStartY(v => e.touches[0].pageY);
    touchStartY = e.touches[0].pageY;
    console.log(e.touches[0].pageY);
  };

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const touchDelta = touchStartY - e.touches[0].pageY;
    const result = targetWithinBounds(artificialScrollY.get() + touchDelta);
    setTimeout(() => {
      artificialScrollY.set(result);
      // touchStartY = result;
    }, moveDelayFiltered);
    console.log('result: ' + result);
    console.log('delta: ' + touchDelta);
  };

  const ontouchEnd = (e: TouchEvent) => {
    // setTimeout(
    //   () =>
    //     artificialScrollY.set(
    //       targetWithinBounds(
    //         artificialScrollY.get() +
    //           Math.abs(touchStartY - e.changedTouches[0].pageY)
    //       )
    //     ),
    //   moveDelayFiltered
    // );
  };

  useLayoutEffect(() => {
    // this avoids the a jump after a refresh and sets artificialScrollY to the initial scrollY value without actually rendering the change animation
    artificialScrollY.set(window.scrollY, false);

    document.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('touchstart', ontouchStart);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', ontouchEnd);
    return () => {
      document.removeEventListener('wheel', onWheel);
      document.removeEventListener('touchstart', ontouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', ontouchEnd);
    };
  }, []);

  useLayoutEffect(() => {
    artificialScrollY.on('change', latest => {
      window.scrollTo({ top: latest });
      // console.log(latest);
    });
  }, [artificialScrollY]);
  // *************************************** SMOOTH SCROLL *****************************
};

export default useArtificialScroll;
