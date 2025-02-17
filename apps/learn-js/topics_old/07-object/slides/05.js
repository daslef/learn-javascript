import { FlexBox, Image } from 'spectacle';

import { DeckSlide } from '../../../components';
import img from '../assets/objects.png';

const SlideContent = () => (
  <FlexBox height="100%" width={1} justifyContent="center" alignItems="center">
    <Image src={img} alignSelf="center" />
  </FlexBox>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Внутреннее устройство"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
