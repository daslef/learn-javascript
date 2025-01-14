import { Slide, Heading, FlexBox, Image } from 'spectacle';

import scrumIcon from '../assets/scrum.svg';

export const Slide08 = () => (
  <Slide>
    <FlexBox height="100%" flexDirection="column" alignItems="end">
      <Heading
        fontWeight="300"
        margin="0px"
        padding="0px"
        style={{ borderBottom: '1px solid #333' }}
      >
        Управление проектами
      </Heading>
      <FlexBox justifyContent="end" width={1} mt="20px">
        <Image src={scrumIcon} width="120px" />
        <Heading margin="0px">Scrum</Heading>
      </FlexBox>
    </FlexBox>
  </Slide>
);
