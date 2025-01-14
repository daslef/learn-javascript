import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as String from './slides';

const meta = {
  heading: '§ Строки',
  heading_en: 'String'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <String.Slide01 {...meta} />
    <String.Slide02 {...meta} />
    <String.Slide03 {...meta} />
    <String.Slide04 {...meta} />
    <String.Slide05 {...meta} />
    <String.Slide06 {...meta} />
    <String.Slide07 {...meta} />
    <String.Slide08 {...meta} />
    <String.Slide09 {...meta} />
    <String.Slide10 {...meta} />
    <String.Slide11 {...meta} />
    <String.Slide12 {...meta} />
    <String.Slide13 {...meta} />
  </Deck>
);
