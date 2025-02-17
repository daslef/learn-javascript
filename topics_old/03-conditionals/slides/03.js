import { Image } from 'spectacle';

import { DeckSlide } from '../../../components';
import FlowChartImage from '../assets/flowchart.png';

const SlideContent = () => (
  <Image
    src={FlowChartImage}
    height="450px"
    style={{ filter: 'brightness(1.5)', margin: '0 auto' }}
  />
);

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Flow Chart"
    SlideContent={SlideContent}
    SlideNotes={null}
  />
);
