// import { useTranslations } from 'next-intl';
import { Separator } from '@/components/Separator/Separator';
import { FlexContainer } from '@/ui/Containers/FlexContainer';
import { PageContainer } from '@/ui/Containers/PageContainer';

import { Hero } from './Hero/Hero';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false}>
      <Hero />

      <FlexContainer flexCol className='bg-black text-white'>
        <Separator className='bg-black' />
        {[...new Array(20)].map((_, i) => (
          <div key={i} className='w-full'>THIS IS TEXT</div>
        ))}
      </FlexContainer>

      {/* {[...new Array(10)].map((_, i) => ( */}
      {/*   <FlexContainer key={i} className='bg-black'> */}
      {/*     <div>TESTING</div> */}
      {/*   </FlexContainer> */}
      {/* ))} */}
    </PageContainer>
  );
}
