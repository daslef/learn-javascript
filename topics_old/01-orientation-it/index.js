import {
  Deck,
  Slide,
  SlideLayout,
  Image,
  Heading,
  Box,
  FlexBox
} from 'spectacle';
import { template } from '../../components';

// import * as OrientationIT from './slides';

import introImage from './assets/intro.png';
import projectPhasesImage from './assets/project-phases.png';
import webPhasesImage from './assets/project-webdev.png';
import teamOverview from './assets/team.png';
import teamRA from './assets/team-ra.png';
import teamPM from './assets/team-pm.webp';
import teamUI from './assets/team-ui.png';
import teamQA from './assets/team-qa.png';
import teamWebdev from './assets/team-webdev.png';

const meta = {
  heading: '§ Введение в IT',
  heading_en: 'Orientation'
};

export const theme = {
  fonts: {
    header:
      'Bitter, "Poiret One", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Poiret One", "Open Sans Condensed", Helvetica, Arial, sans-serif',
    li: '"Poiret One", "Open Sans Condensed", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#042B35',
    // secondary: '#D2A03E',
    tertiary: 'white',
    quartenary: '#A7A7A7'
  }
};

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <SlideLayout.Full>
      <Image src={introImage} width={1} />
    </SlideLayout.Full>
    <SlideLayout.Statement statementProps={{ fontSize: '92px' }}>
      Цифровой продукт - это...
    </SlideLayout.Statement>
    <Slide>
      <FlexBox flexDirection="column" height="100%">
        <Heading fontSize={48}>Жизненный цикл цифрового продукта</Heading>
        <Image src={projectPhasesImage} width={0.7} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" height="100%">
        <Heading fontSize={48}>Жизненный цикл веб-приложения</Heading>
        <Image src={webPhasesImage} width={0.75} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" height="100%">
        <Heading fontSize={48}>Команда</Heading>
        <Image src={teamOverview} />
      </FlexBox>
    </Slide>
    <SlideLayout.Full>
      <FlexBox flexDirection="column" height="100%">
        <Image src={teamRA} width={0.6} />
      </FlexBox>
    </SlideLayout.Full>
    <SlideLayout.Full>
      <FlexBox flexDirection="column" height="100%">
        <Image src={teamPM} width={0.6} />
      </FlexBox>
    </SlideLayout.Full>
    <SlideLayout.Full>
      <FlexBox flexDirection="column" height="100%">
        <Image src={teamUI} width={0.6} />
      </FlexBox>
    </SlideLayout.Full>
    <SlideLayout.Full>
      <FlexBox flexDirection="column" height="100%">
        <Image src={teamWebdev} width={0.6} />
      </FlexBox>
    </SlideLayout.Full>
    <SlideLayout.Full>
      <FlexBox flexDirection="column" height="100%">
        <Image src={teamQA} width={0.6} />
      </FlexBox>
    </SlideLayout.Full>
    <Slide>
      <FlexBox flexDirection="column" height="100%">
        <Heading fontSize={72}>Практика. Этап 1: Идея</Heading>
      </FlexBox>
    </Slide>
  </Deck>
);
