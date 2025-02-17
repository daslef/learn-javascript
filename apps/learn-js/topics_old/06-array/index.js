import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Array from './slides';

const meta = {
  heading: '§ Массив',
  heading_en: 'Array'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Array.Slide01 {...meta} />
    <Array.Slide02 {...meta} />
    <Array.Slide03 {...meta} />
    <Array.Slide04 {...meta} />
    <Array.Slide05 {...meta} />
    <Array.Slide06 {...meta} />
    <Array.Slide07 {...meta} />
    <Array.Slide08 {...meta} />
    <Array.Slide09 {...meta} />
    <Array.Slide10 {...meta} />
    <Array.Slide11 {...meta} />
    {/* <Array.Slide12 {...meta} /> */}
  </Deck>
);
