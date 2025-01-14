import { FlexBox } from 'spectacle';

import { DeckSlide } from '../../../components';

// import historySrc from '../assets/history.mp4';

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="История"
    backgroundColor="#1e1e2e"
    SlideNotes={null}
    SlideContent={() => (
      <FlexBox
        justifyContent="center"
        width={1}
        alignItems="center"
        height="90%"
      >
        <a href="https://www.jetbrains.com/lp/javascript-25/" target='_blank' style={{ fontSize: 42, color: "white" }}>JetBrains JS 25</a>
      </FlexBox>
    )}
  />
);
