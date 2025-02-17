import { Deck } from 'spectacle';
import { theme, template } from '../../components';

import * as MapSet from './slides';

const meta = {
  heading: '§ Map / Set',
  heading_en: ''
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <MapSet.Slide01 {...meta} />
    <MapSet.Slide02 {...meta} />
    {/* <MapSet.Slide03 {...meta} />
    <MapSet.Slide04 {...meta} />
    <MapSet.Slide05 {...meta} />
    <MapSet.Slide06 {...meta} />
    <MapSet.Slide07 {...meta} />
    <MapSet.Slide08 {...meta} />
    <MapSet.Slide09 {...meta} />
    <MapSet.Slide10 {...meta} />
    <MapSet.Slide11 {...meta} />
    <MapSet.Slide12 {...meta} /> */}
  </Deck>
);
