import { Notes } from 'spectacle';

import { DeckSlide, SlideRecap } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Сначала повторим прошлую тему - условные конструкции. Ответы на вопросы:
    <ol>
      <li>Нет (подробно разобрать)</li>
      <li>Нет (подробно разобрать)</li>
      <li>Да (спросить, как оно работает)</li>
      <li>
        Только если в этом кейсе прописан брейк, иначе - пойдет проверять кейсы
        дальше по коду
      </li>
    </ol>
  </Notes>
);

const questions = [
  `В конструкции <code>if / else if / else</code> может быть сколько угодно <code>else</code>, но лишь один <code>else if</code>`,
  `Конструкция <code>switch / case</code> всегда удобней, чем <code>if / else</code>`,
  `Ключевое слово <code>default</code> является альтернативой <code>else</code>`,
  `Как только найден подходящий <code>case</code>, будет выполнен его блок кода, а остальные <code>case</code> будут проигнорированы`
];

export const Slide02 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="?"
    SlideContent={() => <SlideRecap items={questions} />}
    SlideNotes={SlideNotes}
  />
);
