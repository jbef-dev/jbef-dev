// import { useTranslations } from 'next-intl';
import { Separator } from '@/components/Separator/Separator';
import { PageContainer } from '@/ui/Containers/PageContainer';
import { SectionContainer } from '@/ui/Containers/SectionContainer';

import { Hero } from './Hero/Hero';
import { MarketingSection } from './MarketingSection/MarketingSection';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer
        flex
        flexCol
        px={false}
        gap={false}
        center
        wFull
        className='-z-20'
      >
        <Hero />
      </SectionContainer>

      <SectionContainer flex flexCol className='bg-black text-white'>
        <Separator position='top' className='bg-black' />
        <MarketingSection />
        {/* {[...new Array(20)].map((_, i) => ( */}
        {/*   <div key={i} className='w-full'> */}
        {/*     <Button>TESTINGG</Button> */}
        {/*     THIS IS TEXT */}
        {/*   </div> */}
        {/* ))} */}
      </SectionContainer>
    </PageContainer>
  );
}
