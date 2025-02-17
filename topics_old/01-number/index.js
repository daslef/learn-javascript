import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Number from './slides';

const meta = {
  heading: '§ Числа',
  heading_en: 'number'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Number.Slide01 {...meta} />
    <Number.Slide02 {...meta} />
    <Number.Slide03 {...meta} />
    <Number.Slide04 {...meta} />
    <Number.Slide05 {...meta} />
    <Number.Slide06 {...meta} />
    <Number.Slide07 {...meta} />
    <Number.Slide08 {...meta} />
    <Number.Slide09 {...meta} />
    <Number.Slide10 {...meta} />
    <Number.Slide11 {...meta} />
    <Number.Slide12 {...meta} />
  </Deck>
);
