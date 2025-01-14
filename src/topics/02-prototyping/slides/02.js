import { Notes } from 'spectacle';

import { DeckSlide, SlideRecap } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Вспомним предыдущее занятие Ответы на вопросы:
    <ol>
      <li>Сайт, мобильное приложение, умный холодильник, голосовой помощник</li>
      <li>Идея, проектирование, дизайн, разработка, тестирование, запуск</li>
      <li>Стадия поддержки или дальнейшего обновления / доработки</li>
      <li>
        UI/UX дизайнер, маркетолог, тестировщик, пм, продукт оунер,
        контент-менеджер, тимлид
      </li>
    </ol>
  </Notes>
);

const questions = [
  'Приведите примеры цифрового продукта',
  'Какие этапы создания веб-приложения запомнили?',
  'Какая стадия может наступить после запуска продукта?',
  'Какие роли, помимо программистов, есть в IT-командах?'
];

export const Slide02 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="?"
    SlideContent={() => <SlideRecap items={questions} />}
    SlideNotes={SlideNotes}
  />
);
