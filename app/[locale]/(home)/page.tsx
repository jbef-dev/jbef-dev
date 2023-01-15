// import { useTranslations } from 'next-intl';
import { FlexContainer } from '@/app/ui/Containers/FlexContainer';
import { PageContainer } from '@ui/Containers/PageContainer';
import { Hero } from './Hero/Hero';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false}>
      <Hero />

      {[...new Array(10)].map((_, i) => (
        <FlexContainer key={i} className='bg-white'>
          <div>TESTING</div>
        </FlexContainer>
      ))}
    </PageContainer>
  );
}
