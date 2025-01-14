import { Notes } from 'spectacle';

import { DeckSlide, SlideDefinition } from '../../../components';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Всё ли понятно из определения?</li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </Notes>
);

const contentIf = `Когда программа должна выбрать действие в зависимости от
    {%условия%} и алгоритм программы разветвляется, мы используем
    {%условные конструкции%}. Ветвление можно реализовать через
    {%if/else%}, {%switch/case%} и {%объектную нотацию%}`;

const SlideContent = () => (
  <SlideDefinition content={contentIf} textFontSize={52} codeFontSize={44} />
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideContent={SlideContent}
    SlideNotes={SlideNotes}
  />
);
