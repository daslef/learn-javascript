import { Text, Notes, CodeSpan, UnorderedList, ListItem } from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Почему это важно понимать?
    <ol>
      <li>
        Движок неидеален - возможно придется столкнуться с утечками памяти
      </li>
      <li>
        Понимая принципы сборки мусора, можно избежать типовых ошибок,
        приводящих к утечкам
      </li>
      <li>Помогает писать более эффективные алгоритмы</li>
    </ol>
  </Notes>
);

const SlideContent = () => {
  return (
    <>
      <Text>
        Когда мы определяем переменную, движок JS выделяет под нее место в
        оперативной памяти в одной из двух локаций: <CodeSpan>стэке</CodeSpan>{' '}
        или <CodeSpan>куче</CodeSpan>
      </Text>
      <UnorderedList>
        <ListItem fontFamily="li">
          <CodeSpan>Стэк (stack)</CodeSpan> - используется для хранения
          статических данных. Размер фиксирован, обновление быстрое (привязан к
          кэшу процессора), работает по принципу <CodeSpan>LIFO</CodeSpan>,
          управляется процессором, превышение приводит к переполнению{' '}
          <CodeSpan>(stack overflow)</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>Куча (heap)</CodeSpan> - используется для хранения
          динамических данных, движок выделяет память по необходимости. Размер
          ограничен лишь физически, взаимодействие происходит посредством
          ссылок, работает медленнее (значения разбросаны), управляется вручную
          либо сборщиком мусора
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const Slide02 = () => (
  <DeckSlide
    heading="§ Где живут переменные?"
    heading_en="Memory management"
    subheading="Стэк и куча"
    SlideContent={SlideContent}
    SlideNotes={SlideNotes}
  />
);
