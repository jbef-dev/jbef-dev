// import { use100vh } from '@/util/use100vh';
// import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { HeroTitles } from './HeroTitles';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';
// import { RiArrowDownLine } from 'react-icons/ri';
// import { ExplodingLetter } from './ExplodingLetter';

// import architecture from '@/public/img/architecture_preview.webp';
// import colorful_animals from '@/public/img/colorful_animals_preview.webp';
// import { Heading1 } from '@/ui/Typography/Heading1';
// import { MotionSpan } from './MotionSpan';
// // import { CircleSpring } from './CircleSpring';

export const Hero = () => {
  const t = useTranslations('pages.home.hero');

  return (
    <div className='relative flex w-full'>
      <HeroTitles
        titles={[t('heading1'), t('heading2'), t('heading3'), t('heading4')]}
      />
    </div>
  );
};
