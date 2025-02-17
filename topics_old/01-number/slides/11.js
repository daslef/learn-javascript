import {
  FlexBox,
  UnorderedList,
  Text,
  Notes,
  ListItem,
  CodeSpan
} from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const codeInitialize = `
  const x = 1234567890123456789012345678901234567890n
  const y = BigInt(1234567890123456789012345678901234567890)
`;

const codeOperations = `
  console.log(20n + 5n) // 25n
  console.log(20n > 18n) // true

  console.log(200n + 4) // ошибка, нужно преобразовать
  console.log(Number(200n) + 4) // bigint -> number
  console.log(200n + BigInt(4)) // number -> bigint
`;

const SlideContent = () => (
  <FlexBox width={1} flexDirection="column" alignItems="start">
    <Text fontSize={42}>
      <CodeSpan fontSize={36}>bigint</CodeSpan> - специальный числовой тип,
      который предоставляет возможность работать с целыми числами произвольной
      длины
    </Text>
    <Text fontSize={32}>
      Для создания нужно добавить <CodeSpan fontSize={24}>n</CodeSpan> в конец
      числа либо вызвать функцию <CodeSpan fontSize={24}>BigInt</CodeSpan>
    </Text>
    <SlideCodePane showLineNumbers={false} playground={false} size="sm">
      {codeInitialize}
    </SlideCodePane>
    <Text fontSize={32}>
      Можно применять все математические операции, логические операции и
      операции сравнения, помня, что дробная часть будет отбрасываться.
      Смешивать <CodeSpan fontSize={24}>BigInt</CodeSpan> и{' '}
      <CodeSpan fontSize={24}>number</CodeSpan> не допускается
    </Text>
    <SlideCodePane showLineNumbers={false} playground={false} size="sm">
      {codeOperations}
    </SlideCodePane>
  </FlexBox>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="bigint"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
