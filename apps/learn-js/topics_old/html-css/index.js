import { Deck } from 'spectacle';
import { template } from '../../components';

import * as HTMLCSS from './slides';

const meta = {
  heading: '§ HTML, CSS',
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
    primary: '#957',
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
    <HTMLCSS.Slide01 {...meta} />
    <HTMLCSS.Slide02 {...meta} />
    <HTMLCSS.Slide03 {...meta} />
    <HTMLCSS.Slide04 {...meta} />
    <HTMLCSS.Slide05 {...meta} />
    <HTMLCSS.Slide06 {...meta} />
    <HTMLCSS.Slide07 {...meta} />
  </Deck>
);
