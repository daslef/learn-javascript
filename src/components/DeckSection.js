import { FlexBox, Heading, Slide } from 'spectacle';

export const DeckSection = ({
  heading = '',
  heading_en = '',
  SlideNotes = null
}) => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="140px">
          {heading}
        </Heading>
        <Heading margin="0px" color="primary" fontSize="h2">
          {heading_en}
        </Heading>
      </FlexBox>
      {SlideNotes ? <SlideNotes /> : null}
    </Slide>
  );
};
