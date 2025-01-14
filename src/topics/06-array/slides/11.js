import { Text, CodeSpan, FlexBox, Box } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const codeToVars = [
  `const profile = ['Niccolò', 'Paganini', 'violin']
const [firstName, lastName] = profile
console.log(firstName, lastName) // Niccolò, Paganini
`,
  `const profile = ['J.S.', 'Bach', 1685, 1750, 'music', 'compositor']
const [, lastName, born, died, ...activityKind] = profile

console.log(lastName, born, died, activityKind)
// Bach, 1685, 1750, ['music', 'compositor']
`
];

const codeToObject = `
const user = {};
[user.name, user.surname] = profile;

console.log(user) // { "name": "J.S.", "surname": "Bach" }
`;

const SlideContent = () => (
  <FlexBox height="100%" mt={-10}>
    <Text fontSize={32}>
      <CodeSpan fontSize={28}>Деструктуризация</CodeSpan> позволяет создавать
      переменные из элементов массива (и других итерируемых типов),
      "распаковывая" их
    </Text>
    <Box>
      <SlideCodePane showLineNumbers={false} size="sm" playground={false}>
        {codeToVars[0]}
      </SlideCodePane>
      <SlideCodePane showLineNumbers={false} size="sm" playground={false}>
        {codeToVars[1]}
      </SlideCodePane>
      <SlideCodePane showLineNumbers={false} size="sm" playground={false}>
        {codeToObject}
      </SlideCodePane>
    </Box>
  </FlexBox>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Деструктуризация"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
