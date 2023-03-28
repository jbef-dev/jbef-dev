import dynamic from 'next/dynamic';

import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
import {
  FlexContainer,
  PageContainer,
  SectionContainer,
} from '@/ui/Containers';
import { Heading1, Heading3 } from '@/ui/Typography';
import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';

const CalendarWidget = dynamic(() => import('./CalendarWidget/CalendarWidget'));

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
          <Heading3>jorge@jbef.dev</Heading3>
          <Heading3>+34 606 516 718</Heading3>
        </FlexContainer>

        <FlexContainer flexCol>
          <h4 className='text-responsive-lg font-title font-light sm:text-center'>
            Book a free online meeting to discuss your project
          </h4>
          <CalendarWidget
            className='scrollbar-hide w-full h-full'
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
