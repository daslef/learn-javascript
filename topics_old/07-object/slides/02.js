import { Notes } from 'spectacle';

import { DeckSlide, SlideRecap } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Сначала повторим прошлую тему - циклы. Ответы на вопросы:
    <ol>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </Notes>
);

const questions = [
  'циклы <code>while</code> и <code>do..while</code> отличаются только формой записи',
  '<code>break</code> (без метки) выходит только из того цикла, где был указан',
  '<code>for..of</code> предпочтительней для массивов, чем классический <code>for</code>',
  'если в цикле <code>while</code> не менять счетчик и не использовать оператор <code>break</code>, цикл будет выполняться бесконечно',
  'в цикле <code>for</code> может отсутствовать любая часть, кроме шага'
];

export const Slide02 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="?"
    SlideContent={() => <SlideRecap items={questions} itemFontSize={38} />}
    SlideNotes={SlideNotes}
  />
);
