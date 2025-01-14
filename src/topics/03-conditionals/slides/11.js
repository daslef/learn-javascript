import {
  FlexBox,
  Text,
  Notes,
  CodeSpan,
  Heading,
  UnorderedList,
  ListItem
} from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideContent = () => (
  <>
    <Text fontSize={32} style={{ marginBottom: 0 }}>
      Если веток много, но условия завязаны на одну переменную, можно применить{' '}
      <CodeSpan fontSize={28}>switch</CodeSpan>
    </Text>
    <FlexBox alignItems="start" justifyContent="start">
      <Text
        fontSize={24}
        style={{
          marginBottom: 0,
          marginTop: 0,
          borderBottom: '2px solid white'
        }}
      >
        Синтаксис
      </Text>
      <SlideCodePane playground={false} size="sm">
        {`switch (имя_переменной) {
  case значение1:
    // код
  case значение2:
    break
  case значение3:
  case значение4:
    // код
    break
  default: // код
}
`}
      </SlideCodePane>
      <UnorderedList style={{ alignSelf: 'center' }}>
        <ListItem fontSize={34}>
          <CodeSpan fontSize={30}>case</CodeSpan> - аналог{' '}
          <CodeSpan fontSize={30}>if</CodeSpan>
        </ListItem>
        <ListItem fontSize={34}>
          блоки кода расположены после <CodeSpan fontSize={30}>:</CodeSpan>
        </ListItem>
        <ListItem fontSize={34}>
          <CodeSpan fontSize={30}>break</CodeSpan> - оператор выхода из свитча
          (опционален)
        </ListItem>
        <ListItem fontSize={34}>
          <CodeSpan fontSize={30}>default</CodeSpan> - аналог{' '}
          <CodeSpan fontSize={30}>else</CodeSpan> (опционален)
        </ListItem>
      </UnorderedList>
    </FlexBox>
    <FlexBox alignItems="start" justifyContent="start" mt={20} mb={30}>
      <Text
        fontSize={24}
        style={{
          marginBottom: 0,
          marginTop: 0,
          borderBottom: '2px solid white'
        }}
      >
        Например
      </Text>
      <SlideCodePane size="sm">
        {`const userGroup = getGroup({ id: user.id })
let permissions = []

switch (userGroup) {
  case 'anonymous':
  case 'limited':
    permissions = ['read']
  case 'typical':
    permissions = ['read', 'write']
  case 'admin':
    permissions = ['read', 'write', 'execute']
}
`}
      </SlideCodePane>
      <Heading
        fontSize={38}
        style={{
          background: 'white',
          padding: '6px 10px',
          marginTop: 10,
          alignSelf: 'end'
        }}
      >
        Как улучшить этот код?
      </Heading>
    </FlexBox>
  </>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="switch / case"
    SlideNotes={() => (
      <Notes>Важно пройти по всем кейсам и разобрать break</Notes>
    )}
    SlideContent={SlideContent}
  />
);
