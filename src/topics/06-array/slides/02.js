import { Notes } from 'spectacle';

import { DeckSlide, SlideRecap } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Сначала повторим прошлую тему - ?функции?. Ответы на вопросы:
    <ol>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </Notes>
);

const questions = [];

export const Slide02 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="?"
    SlideContent={() => <SlideRecap items={questions} />}
    SlideNotes={SlideNotes}
  />
);
