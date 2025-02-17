import { Notes } from 'spectacle';

import { DeckSlide, SlideDefinition } from '../../../components';

const content = `{%Функция%} — это блок программного кода, который определяется один раз 
      и может вызываться многократно. Функции могут иметь {%аргументы%} – локальные 
      переменные, значения которых определяются при {%вызове%} функции. Функции часто
      используют свои аргументы для вычисления {%возвращаемого значения%}`;

const SlideContent = () => (
  <SlideDefinition
    quote="Дэвид Флэнаган"
    content={content}
    textFontSize={39}
    codeFontSize={35}
    lineHeight="66px"
  />
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideContent={SlideContent}
    SlideNotes={() => <Notes>Разобрать все новые термины</Notes>}
  />
);
