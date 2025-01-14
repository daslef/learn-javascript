import {
  Text,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem,
  FlexBox,
  Box
} from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';
import { code } from './data';

const SlideContent = () => (
  <>
    <Text fontSize={34} style={{ marginTop: -20, marginBottom: 0 }}>
      Обращение к свойствам объектов производится по{' '}
      <CodeSpan fontSize={28}>имени</CodeSpan> свойства (по ключу)
    </Text>
    <FlexBox alignItems="start">
      <SlideCodePane size="xs">{code.initial}</SlideCodePane>
      <Box>
        <SlideCodePane size="xs">{code.dot}</SlideCodePane>
        <SlideCodePane size="xs">{code.brackets}</SlideCodePane>
      </Box>
    </FlexBox>
    <UnorderedList style={{ marginTop: 0 }}>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        лаконичней считается <CodeSpan fontSize={24}>.ключ</CodeSpan>, но если в
        его имени есть пробелы - нужно использовать
        <CodeSpan fontSize={24}>['ключ']</CodeSpan>
      </ListItem>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        если имя свойства хранится в переменной или вычисляется динамически -
        тоже используем <CodeSpan fontSize={24}>[]</CodeSpan>
      </ListItem>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        обращение ко дважды вложенному элементу может выглядеть как{' '}
        <CodeSpan fontSize={24}>.ключВнешний.ключВложенный</CodeSpan> или{' '}
        <CodeSpan fontSize={24}>['ключВнешний']['ключВложенный']</CodeSpan>, и
        по аналогии для любой глубины вложенности
      </ListItem>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        если свойства нет - вернется{' '}
        <CodeSpan fontSize={24}>undefined</CodeSpan>, либо выбросится ошибка
      </ListItem>
    </UnorderedList>
  </>
);

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Обращение"
    SlideNotes={() => (
      <Notes>
        Мы уже умеет обращаться к элементам строк и массивов (индексация).
        Теперь рассмотрим обращение к свойствам типа object
      </Notes>
    )}
    SlideContent={SlideContent}
  />
);
