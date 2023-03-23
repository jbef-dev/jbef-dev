// import { useTranslations } from 'next-intl';
import {
  SeparatorMargin,
  SeparatorRounded,
} from '@/components/Separator/Separator';
import { FlexContainer } from '@/ui/Containers/FlexContainer';
import { PageContainer } from '@/ui/Containers/PageContainer';
import { SectionContainer } from '@/ui/Containers/SectionContainer';
import { Heading1 } from '@/ui/Typography/Heading1';
import { Heading3 } from '@/ui/Typography/Heading3';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flex pb={false} center>
        <Heading1>Let&apos;s get in touch</Heading1>
      </SectionContainer>

      <SeparatorMargin className='bg-white' />

      <SectionContainer flex flexCol pt={false} className='bg-black text-white'>
        <SeparatorRounded position='top' className='bg-black' />
        <FlexContainer className='font-medium' flexCol grow>
          <Heading3>jorge@jbef.dev</Heading3>
          <Heading3>+34 606 516 718</Heading3>
        </FlexContainer>
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
