import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Loops from './slides';

const meta = {
  heading: '§ Циклы',
  heading_en: 'loops'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Loops.Slide01 {...meta} />
    <Loops.Slide02 {...meta} />
    <Loops.Slide03 {...meta} />
    <Loops.Slide04 {...meta} />
    <Loops.Slide05 {...meta} />
    <Loops.Slide06 {...meta} />
    <Loops.Slide07 {...meta} />
    <Loops.Slide08 {...meta} />
    <Loops.Slide09 {...meta} />
    <Loops.Slide10 {...meta} />
    <Loops.Slide11 {...meta} />
    {/* <Loops.Slide12 {...meta} /> */}
  </Deck>
);
