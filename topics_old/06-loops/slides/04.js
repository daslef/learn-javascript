import {
  FlexBox,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem,
  Text
} from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideContent = () => (
  <FlexBox flexDirection="column" height="100%" alignItems="start">
    <Text
      style={{
        fontSize: 36,
        marginBottom: 0,
        borderBottom: '1px solid rgba(255,255,255,0.4)'
      }}
    >
      "Классические" циклы
    </Text>
    <UnorderedList>
      <ListItem fontSize={28}>
        <CodeSpan fontSize={28}>
          for ([начало]; [условие]; [шаг]) выражения
        </CodeSpan>
      </ListItem>
      <ListItem fontSize={28}>
        <CodeSpan fontSize={28}>while (условие) выражения</CodeSpan>
      </ListItem>{' '}
      <ListItem fontSize={28}>
        <CodeSpan fontSize={28}>do while (условие) выражения</CodeSpan>
      </ListItem>
    </UnorderedList>
    <Text
      style={{
        fontSize: 36,
        marginTop: 0,
        marginBottom: 0,
        borderBottom: '1px solid rgba(255,255,255,0.4)'
      }}
    >
      Итерирование по объектам
    </Text>
    <UnorderedList>
      <ListItem fontSize={28}>
        <CodeSpan fontSize={28}>for ... in</CodeSpan>
      </ListItem>
      <ListItem fontSize={28}>
        <CodeSpan fontSize={28}>for ... of</CodeSpan>
      </ListItem>{' '}
    </UnorderedList>
  </FlexBox>
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Циклы в JS"
    SlideNotes={() => (
      <Notes>
        конструкцию for ... in разберем на занятии по объектам, остальные изучим
        сегодня
      </Notes>
    )}
    SlideContent={SlideContent}
  />
);
