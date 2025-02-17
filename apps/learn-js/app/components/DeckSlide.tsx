import { FlexBox, Slide } from 'spectacle';
import { SlideHeader } from '.';

export const DeckSlide = ({
  heading = '',
  heading_en = '',
  subheading = '',
  SlideContent = null,
  SlideNotes = null,
  ...rest
}) => {
  return (
    <Slide {...rest}>
      <SlideHeader
        heading={heading}
        heading_en={heading_en}
        subheading={subheading}
      />
      <FlexBox
        height="calc(100% - 180px)"
        overflowY="auto"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        className="slide__content"
      >
        {SlideContent ? <SlideContent /> : null}
      </FlexBox>
      {SlideNotes ? <SlideNotes /> : null}
    </Slide>
  );
};
