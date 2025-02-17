import { Notes } from 'spectacle';

import { DeckSlide, SlideRecap } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Сначала повторим прошлую тему - массивы. Ответы на вопросы:
    <ol>
      <li>Да</li>
      <li>Да</li>
      <li>Наоборот</li>
      <li>Верно, зависит от второго аргумента</li>
      <li>Нельзя, референсные типы всегда вернут ложь</li>
    </ol>
  </Notes>
);

const questions = [
  'Массив - изменяемая структура данных',
  'Массив сохраняет порядок значений',
  'Для добавления в начало используется push, а в конец - unshift',
  'Для добавления и удаления элементов служит метод splice',
  'Для сравнения массивов можно использовать оператор ==='
];

export const Slide02 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="?"
    SlideContent={() => <SlideRecap items={questions} />}
    SlideNotes={SlideNotes}
  />
);
