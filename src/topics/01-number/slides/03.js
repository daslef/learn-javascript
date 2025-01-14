import { Notes } from 'spectacle';

import { DeckSlide, SlideDefinition } from '../../../components';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Всё ли понятно из определения?</li>
      <li>Что такое вещественное число?</li>
      <li>Почему "основной" тип? Есть и другие?</li>
    </ul>
    <p>
      Для умников - тип представлен в виде 64-битного формата IEEE-754: 1 бит на
      знак числа, 52 бита значения числа и ещё 11 бит местоположения точки
    </p>
  </Notes>
);

const content = `{%number%} — основной числовой тип в JavaScript, работает 
  с целыми и вещественными числами в диапазоне {% ± 9 007 199 254 740 992%}`;

const SlideContent = () => (
  <SlideDefinition
    quote="Дэвид Флэнаган"
    content={content}
    textFontSize={54}
    codeFontSize={44}
    lineHeight="74px"
  />
);

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideContent={SlideContent}
    SlideNotes={SlideNotes}
  />
);
