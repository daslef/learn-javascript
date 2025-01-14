import { Deck, FullScreen, Progress, FlexBox } from 'spectacle';

import * as Methodologies from './slides';

const theme = {
  fonts: {
    header: '"Jura", Helvetica, Arial, sans-serif',
    text: '"Jura", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    li: '"Jura", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    monospace: ''
  },
  colors: {
    primary: '#666',
    secondary: '#333',
    tertiary: 'white',
    quaternary: 'blue',
    quinary: 'yellow'
  },
  fontSizes: {
    h1: 50,
    h2: 40,
    h3: 40,
    text: 30,
    monospace: 16
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <FlexBox padding="0 1.25em" justifyContent="space-between" width={1}>
      <FullScreen color="#666" />
      <Progress color="#666" />
    </FlexBox>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Methodologies.Slide01 />
    <Methodologies.Slide02 />
    <Methodologies.Slide03 />
    <Methodologies.Slide04 />
    <Methodologies.Slide05 />
    <Methodologies.Slide06 />
    <Methodologies.Slide07 />
    <Methodologies.Slide08 />
    <Methodologies.Slide09 />
    <Methodologies.Slide10 />
    <Methodologies.Slide11 />
    <Methodologies.Slide12 />
    <Methodologies.Slide13 />
    <Methodologies.Slide14 />
  </Deck>
);

export { Methodologies, Presentation };
