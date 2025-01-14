import {
  FlexBox,
  UnorderedList,
  Text,
  Notes,
  ListItem,
  CodeSpan
} from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const code = 'const s = `<span className="nickname">${user.name}</span>`';

const SlideContent = () => (
  <>
    <Text fontSize={36} style={{ marginTop: 0, marginBottom: 0 }}>
      Шаблонные строки позволяют конструировать строки на основе шаблонов,
      динамически подставляя в них данные и вычисляемые выражения
    </Text>
    <SlideCodePane showLineNumbers={false}>{code}</SlideCodePane>
    <UnorderedList style={{ marginBottom: 0 }}>
      <ListItem fontSize={28}>
        задаются с помощью бэктиков <CodeSpan fontSize={28}>``</CodeSpan>
      </ListItem>
      <ListItem fontSize={28}>могут быть многострочными </ListItem>
      <ListItem fontSize={28}>
        можно подставлять любые выражения в{' '}
        <CodeSpan fontSize={28}>{`\${ }`}</CodeSpan>
      </ListItem>
      <ListItem fontSize={28}>
        внутри можно использовать кавычки без экранирования*
      </ListItem>
      <ListItem fontSize={28}>
        удобно соединять подстроки, контролируя пробелы и переносы строк
      </ListItem>
    </UnorderedList>
  </>
);

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Шаблонные строки"
    SlideNotes={() => <Notes></Notes>}
    SlideContent={SlideContent}
  />
);
