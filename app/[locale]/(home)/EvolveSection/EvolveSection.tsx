import { Heading2 } from '@/ui/Typography/Heading2';
import { AOSText } from './AOSText';
import { EvolveContainer } from './EvolveContainer';
import { StandOutIcons } from './StandOutIcons';

export const EvolveSection = () => {
  return (
    <EvolveContainer className='flex flex-col w-full items-center justify-center'>
      <Heading2 className='flex items-center justify-center flex-col w-full max-w-screen-2xl'>
        <AOSText
          className='self-start pl-[20%] font-special italic tracking-wider'
          xStyle={0}
          // style={{ x: spanX1 }}
        >
          EVOLVE &nbsp;
        </AOSText>
        <AOSText
          xStyle={1}
          // style={{ x: spanX2 }}
        >
          YOUR WEBSITE
        </AOSText>
      </Heading2>

      <StandOutIcons />

      <Heading2 className='flex flex-col w-full max-w-screen-xl'>
        <AOSText
          className='self-end pr-[15%] font-special italic tracking-wider'
          xStyle={2}
          // style={{ x: spanX3 }}
        >
          STAND OUT &nbsp;
        </AOSText>
        <AOSText
          className='self-center pl-10'
          xStyle={3}
          // style={{ x: spanX4 }}
        >
          ONLINE
        </AOSText>
      </Heading2>
    </EvolveContainer>
  );
};
