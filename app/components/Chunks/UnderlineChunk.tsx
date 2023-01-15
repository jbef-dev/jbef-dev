import { ReactNode } from 'react';

export const UnderlineChunk = (chunks: ReactNode): ReactNode => (
  <span className='relative whitespace-nowrap'>
    {chunks}
    <span className='absolute bg-gradient-to-r from-accent-main to-accent-main/70 w-full left-0 bottom-[0.12em] -z-10 opacity-70 h-[0.15em]'></span>
  </span>
);
