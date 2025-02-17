import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Prototype from './slides';

const meta = {
  heading: '§ Проектирование',
  heading_en: 'Prototyping'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Prototype.Slide01 {...meta} />
    <Prototype.Slide02 {...meta} />
    <Prototype.Slide03 {...meta} />
    <Prototype.Slide04 {...meta} />
    <Prototype.Slide05 {...meta} />
    <Prototype.Slide06 {...meta} />
    <Prototype.Slide07 {...meta} />
    <Prototype.Slide08 {...meta} />
    <Prototype.Slide09 {...meta} />
    <Prototype.Slide10 {...meta} />
    <Prototype.Slide11 {...meta} />
    <Prototype.Slide12 {...meta} />
    <Prototype.Slide13 {...meta} />
  </Deck>
);
