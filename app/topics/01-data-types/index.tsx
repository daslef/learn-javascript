import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Types from './slides';

const meta = {
  heading: '§ Типы данных',
  heading_en: 'Data Types'
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Types.Slide01 {...meta} />
    <Types.Slide02 {...meta} />
    <Types.Slide03 {...meta} />
    <Types.Slide04 {...meta} />
    <Types.Slide05 {...meta} />
    <Types.Slide06 {...meta} />
    <Types.Slide07 {...meta} />
  </Deck>
);
