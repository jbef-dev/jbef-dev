import { RefObject, useEffect, useState } from 'react';

interface InViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

/**
@description
To use Intersection Observer options:
  const options = {
    root: null,
    rootMargin: '-10% 0px -20% 0px',
    threshold: 0.8
  }
The above indicates that root is the viewport, the rootMargin is 10% from the top,
20% from the bottom and 0px from both sides, and it only triggers when threshold is met,
which is when 0.8 (80%) of the element is visible

 **/

export const useInView = (
  ref: RefObject<any>,
  { once = false, ...intersectionOptions }: InViewOptions
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    console.log(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, intersectionOptions);

    if (ref.current) observer.observe(ref.current);

    if (once && isVisible) observer.unobserve(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, intersectionOptions]);

  return isVisible;
};
