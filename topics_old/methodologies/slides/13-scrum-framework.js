import { Slide, Heading, FlexBox, Image } from 'spectacle';

import scrumFramework from '../assets/scrum-framework.webp';

export const Slide13 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="80px"
      paddingBottom="80px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        <span style={{ fontSize: 20 }}>agile</span> Scrum
      </Heading>
      <Image src={scrumFramework} width={0.8} />
    </FlexBox>
  </Slide>
);
