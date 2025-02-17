import { useState } from 'react';
import { Text, Notes, CodeSpan, Box, FlexBox } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const codeSteps = {
  0: `
    const greeting = 'My nickname is'
    const nickName = 'jscool2007'
    console.log(greeting + nickName) // ?
  `,
  1: `
    const greeting = 'My nickname is'
    const nickName = 'jscool2007'
    console.log(greeting + nickName) // My nickname isjscool2007

    // Как это исправить?
  `,
  2: `
    const greeting = 'My nickname is'
    const nickName = 'jscool2007'
    console.log(greeting + ' ' + nickName) // My nickname is jscool2007

    // Но есть и еще один способ!
`,
  3: `
    const greeting = 'My nickname is'
    const nickName = 'jscool2007'
    console.log(\`\${greeting} \${nickName}\`) // My nickname is jscool2007

    // Здесь мы используем шаблонные строки - рассмотрим их подробнее!
  `
};

const SlideNotes = () => <Notes></Notes>;

const SlideContent = () => {
  const [codeStep, setCodeStep] = useState(0);

  return (
    <FlexBox height="100%" flexDirection="column" alignItems="start">
      <Text>
        Строки можно <CodeSpan fontSize={36}>конкатенировать</CodeSpan>{' '}
        (складывать). Самый простой способ - оператором{' '}
        <CodeSpan fontSize={36}>+</CodeSpan>
      </Text>
      <Box
        onClick={() => setCodeStep(Math.min(codeStep + 1, 3))}
        style={{ cursor: codeStep <= 3 ? 'pointer' : 'default' }}
      >
        <SlideCodePane>{codeSteps[codeStep]}</SlideCodePane>
      </Box>
    </FlexBox>
  );
};

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Конкатенация"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
