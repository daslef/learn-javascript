import { Deck } from 'spectacle';
import { template } from '../../components';

import * as JavaScript from './slides';

const meta = {
  heading: '§ JavaScript',
  heading_en: ''
};

const theme = {
  fonts: {
    header: '"Jura", Helvetica, Arial, sans-serif',
    text: '"Jura", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    li: '"Jura", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    monospace: ''
  },
  colors: {
    primary: '#bbb',
    secondary: '#ddd',
    tertiary: 'white',
    quaternary: 'blue',
    quinary: 'yellow'
  },
  fontSizes: {
    h1: 42,
    h2: 38,
    h3: 38,
    text: 28,
    monospace: 24
  },
  space: [16, 16, 24, 24, 48]
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <JavaScript.Slide01 {...meta} />
    <JavaScript.Slide02 {...meta} />
    <JavaScript.Slide03 {...meta} />
    <JavaScript.Slide04 {...meta} />
    <JavaScript.Slide05 {...meta} />
    <JavaScript.Slide06 {...meta} />
    <JavaScript.Slide07 {...meta} />
  </Deck>
);
