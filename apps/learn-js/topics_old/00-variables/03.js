import {
  Heading,
  Slide,
  Text,
  Notes,
  CodeSpan,
  OrderedList,
  ListItem
} from 'spectacle';

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
        <CodeSpan>Сборщик мусора (GC)</CodeSpan> - встроенная система наблюдения
        за состоянием памяти. Как только движок понимает, что в переменной или
        функции больше нет необходимости, он освобождает ранее выделенную под
        нее память.
      </Text>
      <Text>
        Идеального алгоритма пока не придумано. В браузерах применяется принцип{' '}
        <CodeSpan>mark and sweep</CodeSpan>, где проверяется достижимость
        (возможность получить доступ) потомков через корневой объект
        <CodeSpan>window/global</CodeSpan> по ссылке или цепочке ссылок
      </Text>
      <Text>
        При подозрении на утечку можно использовать{' '}
        <CodeSpan>Chrome DevTools</CodeSpan> - вкладки{' '}
        <CodeSpan>timeline</CodeSpan> и <CodeSpan>profiles</CodeSpan>
      </Text>
      <Text>Примеры утечек памяти:</Text>
      <OrderedList>
        <ListItem>
          Необоснованное хранение данных в глобальных переменных (привязываются
          к корневому объекту). Решение - освобождать память вручную{' '}
          <CodeSpan>(window.x = null)</CodeSpan>
        </ListItem>
        <ListItem>
          Забытые таймеры и коллбэки, особенно если они добавляются динамически.
          Решение - своевременно очищать интервалы и слушателей событий
        </ListItem>
      </OrderedList>
    </>
  );
};

export const Slide03 = () => {
  return (
    <DeckSlide
      heading="§ Где живут переменные?"
      heading_en="Memory management"
      subheading="Сборка мусора"
      SlideContent={SlideContent}
      SlideNotes={SlideNotes}
    />
  );
};
