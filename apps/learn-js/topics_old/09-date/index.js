import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Dates from './slides';

const meta = {
  heading: '§ Дата',
  heading_en: 'Date'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Dates.Slide01 {...meta} />
    <Dates.Slide02 {...meta} />
    {/* <Dates.Slide03 {...meta} />
    <Dates.Slide04 {...meta} />
    <Dates.Slide05 {...meta} />
    <Dates.Slide06 {...meta} />
    <Dates.Slide07 {...meta} />
    <Dates.Slide08 {...meta} />
    <Dates.Slide09 {...meta} />
    <Dates.Slide10 {...meta} />
    <Dates.Slide11 {...meta} />
    <Dates.Slide12 {...meta} /> */}
  </Deck>
);
