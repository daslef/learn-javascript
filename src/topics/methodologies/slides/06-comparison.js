import { Slide, Heading, FlexBox, Text, Image } from 'spectacle';

import compareScheme from '../assets/waterfall-and-agile-scheme.webp';
import successRates from '../assets/waterfall-and-agile-success.jpg';
import mvpScheme from '../assets/mvp.webp';

export const Slide06 = () => (
  <Slide>
    <FlexBox height="100%" alignItems="center" paddingX="40px">
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Image src={compareScheme} style={{ width: '70%' }} />
        <Image src={mvpScheme} style={{ width: '60%' }} />
      </FlexBox>
      <Image src={successRates} style={{ width: '50%' }} />
    </FlexBox>
  </Slide>
);
