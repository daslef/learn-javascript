import { FlexBox, Text, CodeSpan } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';

import { code } from './data';

const SlideContent = () => (
  <FlexBox flexDirection="column" alignItems="start">
    <Text fontSize={36} style={{ marginTop: -10, marginBottom: 0 }}>
      Для перебора ключей объекта применяется цикл{' '}
      <CodeSpan fontSize={32}>for...in</CodeSpan>
    </Text>
    <SlideCodePane showLineNumbers={false} playground={false}>
      {code.example}
    </SlideCodePane>
    <Text fontSize={24} style={{ marginBottom: 0 }}>
      Порядок свойств в объектах: если ключ свойства может быть преобразован в
      целое число, он будет сортирован по возрастанию, остальные ключи -
      хранятся в порядке создания
    </Text>
  </FlexBox>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Итерирование"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
