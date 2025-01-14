import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Functions from './slides';

const meta = {
  heading: '§ Функции: Продолжение',
  heading_en: 'function: advanced'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Functions.Slide01 {...meta} />
    <Functions.Slide02 {...meta} />
    {/* <Functions.Slide03 {...meta} />
    <Functions.Slide04 {...meta} />
    <Functions.Slide05 {...meta} />
    <Functions.Slide06 {...meta} />
    <Functions.Slide07 {...meta} />
    <Functions.Slide08 {...meta} />
    <Functions.Slide09 {...meta} />
    <Functions.Slide10 {...meta} />
    <Functions.Slide11 {...meta} />
    <Functions.Slide12 {...meta} /> */}
  </Deck>
);
