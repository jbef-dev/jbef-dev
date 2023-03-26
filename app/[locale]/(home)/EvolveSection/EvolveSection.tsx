import { Heading2 } from '@/ui/Typography';
import { EvolveTitle } from './EvolveTitle';
import { StandOutIcons } from './StandOutIcons';
import { FlexContainer } from '@/ui/Containers';

const EvolveSection = () => {
  return (
    <FlexContainer flexCol center>
      <Heading2 className='flex items-center justify-center flex-col w-full max-w-screen-2xl'>
        <EvolveTitle className='self-start pl-[20%] font-medium' xStyle={0}>
          EVOLVE
        </EvolveTitle>
        <EvolveTitle className='font-extralight' xStyle={1}>
          YOUR WEBSITE
        </EvolveTitle>
      </Heading2>

      <StandOutIcons />

      <Heading2 className='flex flex-col w-full max-w-screen-xl'>
        <EvolveTitle className='self-end pr-[15%] font-extralight' xStyle={2}>
          STAND OUT
        </EvolveTitle>
        <EvolveTitle className='self-center pl-10 font-medium' xStyle={3}>
          ONLINE
        </EvolveTitle>
      </Heading2>
    </FlexContainer>
  );
};

export { EvolveSection };
