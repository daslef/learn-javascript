import { Text, CodeSpan, FlexBox, Box } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const code = {
  for: `for (let ix = 0; ix < items.length; ix++ ) {
  console.log(items[ix])
}`,
  while: `let ix = 0
while (ix < items.length) {
  console.log(items[ix])
  ix++
}`,
  forOf: `for (let item of items) {
  console.log(item)
}`
};

const Tag = ({ text }) => (
  <CodeSpan
    style={{
      position: 'absolute',
      bottom: 10,
      right: 30,
      zIndex: 50,
      fontSize: 28,
      padding: '8px 14px',
      borderRadius: '18px'
    }}
  >
    {text}
  </CodeSpan>
);

const SlideContent = () => (
  <FlexBox mt={-30} flexDirection="column" alignItems="start">
    <Text fontSize={24}>
      Циклы часто применяются для перебора элементов последовательности
      (например, массивов или аргументов функции). Переберем массив{' '}
      <CodeSpan fontSize={20}>const items = [1, 8, 5, -11, 0]</CodeSpan>
    </Text>

    <FlexBox alignItems="stretch" mt={-15} ml={30}>
      <Box
        style={{
          position: 'relative',
          background: 'rgb(45,45,45)',
          marginRight: '20px'
        }}
      >
        <Tag text="while" />
        <SlideCodePane showLineNumbers={false} size="sm" playground={false}>
          {code.while}
        </SlideCodePane>
      </Box>

      <Box style={{ position: 'relative', background: 'rgb(45,45,45)' }}>
        <Tag text="for" />
        <SlideCodePane showLineNumbers={false} size="sm" playground={false}>
          {code.for}
        </SlideCodePane>
      </Box>
    </FlexBox>
    <Text fontSize={28} fontWeight="bold">
      Конструкция <CodeSpan fontSize={24}>for...of</CodeSpan> делает это
      лаконичней (но не дает доступа к индексам)
    </Text>
    <SlideCodePane
      style={{ marginTop: -10, marginLeft: 30 }}
      showLineNumbers={false}
      size="sm"
      playground={false}
    >
      {code.forOf}
    </SlideCodePane>
  </FlexBox>
);

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="for...of"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
