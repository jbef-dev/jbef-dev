import { Heading2 } from '@/ui/Typography';
import { EvolveTitle } from './EvolveTitle';
import { StandOutIcons } from './StandOutIcons';
import { FlexContainer } from '@/ui/Containers';
import { Dictionary } from '@/i18n/config';
import { AppearOnScroll } from '@/ui/Animated/AppearOnScroll';

const EvolveSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <FlexContainer flexCol center>
      <Heading2 className='flex items-center justify-center flex-col w-full max-w-screen-2xl'>
        <EvolveTitle className='self-start pl-[20%] font-medium' xStyle={0}>
          {dictionary['pages'].home.evolve.titles.title1}
        </EvolveTitle>
        <EvolveTitle className='font-extralight' xStyle={1}>
          {dictionary['pages'].home.evolve.titles.title2}
        </EvolveTitle>
      </Heading2>

      <StandOutIcons />

      <Heading2 className='flex flex-col w-full max-w-screen-xl'>
        <EvolveTitle
          className='self-end pr-[15%] flex font-extralight'
          xStyle={2}
        >
          {dictionary['pages'].home.evolve.titles.title3}
        </EvolveTitle>
        <EvolveTitle className='self-center pl-10 font-medium' xStyle={3}>
          {dictionary['pages'].home.evolve.titles.title4}
        </EvolveTitle>
      </Heading2>
    </FlexContainer>
  );
};

export { EvolveSection };
