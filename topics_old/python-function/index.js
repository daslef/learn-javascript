import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as Function from './slides';

const meta = {
  heading: '§ Функции',
  heading_en: 'functions'
};

export const Presentation = () => (
  <Deck
    theme={{
      ...theme,
      colors: { tertiary: '#412a50' }
    }}
    template={template}
  >
    <Function.Slide01 {...meta} />
    <Function.Slide02 {...meta} />
    <Function.Slide03 {...meta} />
    <Function.Slide04 {...meta} />
    <Function.Slide05 {...meta} />
    <Function.Slide06 {...meta} />
    <Function.Slide07 {...meta} />
    <Function.Slide08 {...meta} />
    <Function.Slide09 {...meta} />
    <Function.Slide10 {...meta} />
    <Function.Slide11 {...meta} />
    <Function.Slide12 {...meta} />
  </Deck>
);
