import { Notes } from 'spectacle';

import { DeckSlide, SlideDefinition } from '../../../components';

const content = `{%Массив%} — упорядоченная изменяемая структура данных для хранения 
    элементов любых типов`;

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideNotes={() => (
      <Notes>
        Разобрать определение. Обсудить, где в проекте пригодятся массивы
      </Notes>
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
