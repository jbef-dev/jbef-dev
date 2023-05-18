import dynamic from 'next/dynamic';

import {
  FlexContainer,
  PageContainer,
  SectionContainer,
} from '@/ui/Containers';
import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { Heading } from '@/ui/Typography';
import { Button } from '@/ui/Button/Button';

const CalendarWidget = dynamic(
  () => import('@/components/CalendarWidget/CalendarWidget')
);

export const runtime = 'edge';

export default async function Contact({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <PageContainer mb={false}>
      <SectionContainer flex flexCol center>
        <Heading
          as='h1'
          className='text-center text-responsive-5xl font-medium'
        >
          Let&apos;s get in touch
        </Heading>
      </SectionContainer>

      <SectionContainer flex flexCol pt={false}>
        <h2 className='text-responsive-2xl font-medium'>
          <FlexContainer className='font-medium' center flexCol grow>
            {/* <Heading1>jorge@jb1</Heading1> */}
            {/* <Heading2>jorge@jb2</Heading2> */}
            {/* <Heading3>jorge@jb3</Heading3> */}
            {/* <Heading4>jorge@jb4</Heading4> */}
            {/* <Heading5>jorge@jb5</Heading5> */}
            {/* <Heading6>jorge@jb6</Heading6> */}
            {/* <span className='text-responsive-lg'>jorge@jb</span> */}
            {/* <span className='text-responsive-md'>jorge@jb</span> */}
            {/* <span className='text-responsive-sm'>jorge@jb</span> */}
            {/* <span className='text-responsive-xs'>jorge@jb</span> */}
            <Heading as='span'>jorge@jbef.dev</Heading>
            <Heading as='span'>+34 606 516 718</Heading>
          </FlexContainer>
        </h2>

        <FlexContainer flexCol>
          <h4 className='font-title text-responsive-lg font-light sm:text-center'>
            Book a free online meeting to discuss your project
          </h4>
          <CalendarWidget
            className='scrollbar-hide h-full w-full'
          // calLink='jbef-dev/30min'
          />
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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(locale);
  return {
    title: dict['pages'].contact.SEO.title,
    description: dict['pages'].contact.SEO.description,
  };
}
