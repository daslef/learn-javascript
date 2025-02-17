import { Notes } from 'spectacle';

import { DeckSlide, SlideDefinition } from '../../../components';

const content = `{%Цикл%} — способ повторить однотипное действие много раз`;

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideNotes={() => (
      <Notes>Привести примеры. Обсудить, где в проекте пригодятся циклы</Notes>
    )}
    SlideContent={() => (
      <SlideDefinition
        content={content}
        textFontSize={64}
        codeFontSize={68}
        lineHeight="80px"
      />
    )}
  />
);
