import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Conditionals from './slides';

const meta = {
  heading: '§ Ветвления',
  heading_en: 'Conditionals'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Conditionals.Slide01 {...meta} />
    <Conditionals.Slide02 {...meta} />
    <Conditionals.Slide03 {...meta} />
    <Conditionals.Slide04 {...meta} />
    <Conditionals.Slide05 {...meta} />
    <Conditionals.Slide06 {...meta} />
    <Conditionals.Slide07 {...meta} />
    <Conditionals.Slide08 {...meta} />
    <Conditionals.Slide09 {...meta} />
    <Conditionals.Slide10 {...meta} />
    <Conditionals.Slide11 {...meta} />
    <Conditionals.Slide12 {...meta} />
    <Conditionals.Slide13 {...meta} />
  </Deck>
);
