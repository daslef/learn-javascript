import { Text, Notes, Appear, CodeSpan } from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Строки сами по себе являются примитивом, то есть хранят только значения. Но
    мы уже использовали несколько методов, таких как length и charAt. Как же это
    работает? При вызове метода над строкой происходит автоматическое
    оборачивание в String, в котором эти методы прописаны
  </Notes>
);

const SlideContent = () => (
  <>
    <Text fontSize={34} style={{ marginBottom: 0 }}>
      Строки сами по себе являются примитивом, то есть хранят только значения.
      Но в языке реализован хитрый механизм - обёртки над примитивами. Для строк
      - это обёртка в <CodeSpan fontSize={28}>String</CodeSpan>.
    </Text>
    <Appear>
      <Text fontSize={34} style={{ marginBottom: 0 }}>
        Обёртка содержит дополнительные методы для работы со строками. Они не
        входят в стандарт типа данных «строка» и поэтому выделены в отдельный
        модуль
      </Text>
    </Appear>
    <Appear>
      <Text fontSize={34}>
        При желании это можно сделать вручную:{' '}
        <CodeSpan fontSize={26}>const myStr = new String('я строка')</CodeSpan>,
        но обычно это не требуется, так как JavaScript автоматически оборачивает
        строку, когда программист вызывает метод, находящийся в обёртке
      </Text>
    </Appear>
  </>
);

export const Slide12 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Методы"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
