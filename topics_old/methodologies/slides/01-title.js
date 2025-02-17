import { Slide, Heading, FlexBox, Image } from 'spectacle';

import agile from '../assets/title-agile.png';
import waterfall from '../assets/title-waterfall.png';

export const Slide01 = () => (
  <Slide>
    <FlexBox height="100%" flexDirection="column" alignItems="end">
      <Heading fontWeight="300" margin="0px" padding="0px">
        Управление проектами
      </Heading>
      <Heading margin="0px" style={{ borderBottom: '1px solid #333' }}>
        Методологии
      </Heading>
      <FlexBox justifyContent="end" width={1} mt="80px">
        <Image src={waterfall} width="120px" style={{ paddingRight: '20px' }} />
        <Image src={agile} width="120px" style={{ paddingRight: '20px' }} />
      </FlexBox>
    </FlexBox>
  </Slide>
);
