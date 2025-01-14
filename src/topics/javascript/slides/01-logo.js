import { Slide, FlexBox, Image } from 'spectacle';

import jsImage from '../assets/js.jpg';

export const Slide01 = () => (
  <Slide backgroundColor="black">
    <FlexBox
      height="calc(100% - 80px)"
      overflowY="hidden"
      overflowX="hidden"
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
    >
      <Image src={jsImage} width={0.95} />
    </FlexBox>
  </Slide>
);
