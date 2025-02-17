import { Notes } from 'spectacle';

import { DeckSlide, SlideDefinition } from '../../../components';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Всё ли понятно из определения?</li>
      <li>Что такое Unicode?</li>
      <li>Не смутило слово "обычно"?</li>
      <li>Кто такой Дэвид Флэнаган?</li>
    </ul>
  </Notes>
);

const content = `{%Строка%} — это неизменяемая упорядоченная последовательность 
  16-битных значений, каждое из которых обычно представляет символ {%Unicode%}`;

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideNotes={SlideNotes}
    SlideContent={() => (
      <SlideDefinition
        quote="Дэвид Флэнаган"
        content={content}
        lineHeight="78px"
        textFontSize={42}
        codeFontSize={42}
      />
    )}
  />
);
