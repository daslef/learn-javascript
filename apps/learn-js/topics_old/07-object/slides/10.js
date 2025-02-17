import { CodeSpan, Text, FlexBox } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const code = {
  syntax: `"имя свойства" in object`,
  example: `const user = { name: "John", age: 30 }

console.log('status' in user) // false
`
};

const SlideContent = () => (
  <FlexBox height="100%" flexDirection="column" alignItems="start">
    <Text fontSize={36}>
      Для проверки существования свойства в объекте применяется оператор{' '}
      <CodeSpan fontSize={32}>in</CodeSpan>
    </Text>
    <FlexBox justifyContent="start">
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
      <SlideCodePane showLineNumbers={false} playground={false}>
        {code.syntax}
      </SlideCodePane>
    </FlexBox>
    <FlexBox justifyContent="start">
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
      <SlideCodePane showLineNumbers={false} playground={false}>
        {code.example}
      </SlideCodePane>
    </FlexBox>
  </FlexBox>
);

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="in"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
