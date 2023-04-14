import dynamic from 'next/dynamic';

import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
import {
  FlexContainer,
  PageContainer,
  SectionContainer,
} from '@/ui/Containers';
import { Heading1, Heading5 } from '@/ui/Typography';
import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

const CalendarWidget = dynamic(
  () => import('@/components/CalendarWidget/CalendarWidget')
);

export default async function Contact({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flex flexCol pb={false} center>
        <Heading1 className='text-center'>Let&apos;s get in touch</Heading1>
        <SeparatorMargin />
      </SectionContainer>

      <SectionContainer flex flexCol pt={false} className='bg-black text-white'>
        <SeparatorRounded position='top' className='bg-black' />
        <FlexContainer className='font-medium' flexCol grow>
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
          <Heading5>jorge@jbef.dev</Heading5>
          <Heading5>+34 606 516 718</Heading5>
        </FlexContainer>

        <FlexContainer flexCol>
          <h4 className='font-title text-responsive-lg font-light sm:text-center'>
            Book a free online meeting to discuss your project
          </h4>
          <CalendarWidget
            className='scrollbar-hide h-full w-full'
            calLink='jbef-dev/30min'
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
