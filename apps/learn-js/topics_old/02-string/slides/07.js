import { Text, Notes, CodeSpan, Box } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Раз мы знаем, что строка - это последовательность символов, должен быть
    способ обратиться к символу внутри строки!
    <ul>
      <li>
        Задачу получения последнего символа решить интерактивно. Использовать
        знания с прошлого слайда о длине строки. Если легко - попробовать
        усложненный вариант - с эмодзи
      </li>
    </ul>
  </Notes>
);

const code = `
  let lang = 'JavaScript'
  console.log(lang[1]) // ?
  console.log(lang.charAt(1)) // ?

  // как получить последний символ?
  `;

const SlideContent = () => (
  <>
    <Text>
      <CodeSpan fontSize={36}>Индексация</CodeSpan> - обращение к элементам
      последовательности (в данном случае - символам строки) по их порядковому
      номеру. Производится через <CodeSpan fontSize={36}>[]</CodeSpan> либо
      методом <CodeSpan fontSize={36}>charAt</CodeSpan>
    </Text>
    <SlideCodePane>{code}</SlideCodePane>
  </>
);

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Индексация"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
