// import { useTranslations } from 'next-intl';
import { FlexContainer } from '@ui/Containers/FlexContainer';
import { PageContainer } from '@ui/Containers/PageContainer';

import { Hero } from './Hero/Hero';
import SquareSeparator from './SquareSeparator/SquareSeparator';

export default function Home({}) {
  // const t = useTranslations('pages.home');

  return (
    <PageContainer mt={false}>
      <Hero />

      <FlexContainer gap={false} py={false}>
        <SquareSeparator />
      </FlexContainer>

      {[...new Array(10)].map((_, i) => (
        <FlexContainer key={i}>
          <div>TESTING</div>
        </FlexContainer>
      ))}
    </PageContainer>
  );
}
