import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Objects from './slides';

const meta = {
  heading: '§ Объект',
  heading_en: 'Object'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Objects.Slide01 {...meta} />
    <Objects.Slide02 {...meta} />
    <Objects.Slide03 {...meta} />
    <Objects.Slide04 {...meta} />
    <Objects.Slide05 {...meta} />
    <Objects.Slide06 {...meta} />
    <Objects.Slide07 {...meta} />
    <Objects.Slide08 {...meta} />
    <Objects.Slide09 {...meta} />
    <Objects.Slide10 {...meta} />
    <Objects.Slide11 {...meta} />
    <Objects.Slide12 {...meta} />
    <Objects.Slide13 {...meta} />
    <Objects.Slide14 {...meta} />
    <Objects.Slide15 {...meta} />
  </Deck>
);
