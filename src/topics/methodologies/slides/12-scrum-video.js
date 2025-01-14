import { Slide, Heading, FlexBox, Text } from 'spectacle';
import ReactPlayer from 'react-player';

export const Slide12 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="80px"
      paddingBottom="120px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        <span style={{ fontSize: 20 }}>agile</span> Scrum
      </Heading>
      <ReactPlayer url="https://www.youtube.com/watch?v=sLK3EHPCw14&ab_channel=OeLean" />
    </FlexBox>
  </Slide>
);
