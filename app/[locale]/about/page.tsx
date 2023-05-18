import { SeparatorMargin, SeparatorRounded } from '@/components/Separator';
import {
  FlexContainer,
  PageContainer,
  SectionContainer,
} from '@/ui/Containers';
import { Heading } from '@/ui/Typography';
import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';

export default async function About({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return (
    <PageContainer mt={false} mb={false}>
      <SectionContainer flex pb={false} center>
        <Heading as='h1' className='text-center text-responsive-4xl'>
          Let&apos;s get in touch
        </Heading>
      </SectionContainer>

      <SeparatorMargin className='bg-white' />

      <SectionContainer flex flexCol pt={false} className='bg-black text-white'>
        <SeparatorRounded position='top' className='bg-black' />

        <h2>
          <FlexContainer className='font-medium' flexCol grow>
            <Heading as='span'>jorge@jbef.dev</Heading>
            <Heading as='span'>+34 606 516 718</Heading>
          </FlexContainer>
        </h2>

        <FlexContainer flexCol>
          <h4 className='font-title text-responsive-lg font-light sm:text-center'>
            Book a free online meeting to discuss your project
          </h4>
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

export const runtime = 'edge';
