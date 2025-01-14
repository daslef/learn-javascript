import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as OOP from './slides';

const meta = {
  heading: '§ ООП',
  heading_en: 'OOP'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <OOP.Slide01 {...meta} />
    <OOP.Slide02 {...meta} />
    {/* <OOP.Slide03 {...meta} />
    <OOP.Slide04 {...meta} />
    <OOP.Slide05 {...meta} />
    <OOP.Slide06 {...meta} />
    <OOP.Slide07 {...meta} />
    <OOP.Slide08 {...meta} />
    <OOP.Slide09 {...meta} />
    <OOP.Slide10 {...meta} />
    <OOP.Slide11 {...meta} />
    <OOP.Slide12 {...meta} /> */}
  </Deck>
);
