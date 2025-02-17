import { Text, CodeSpan, FlexBox, Box } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const code = [
  `const profile = {  firstName: 'Niccolò',  lastName: 'Paganini' }

const { firstName, lastName } = profile
console.log(firstName, lastName) // Niccolò, Paganini
`,
  `const profile = { firstName: 'J.S', lastName: 'Bach' }

const profileWithDetails = { ...profile, instrument: 'violin'}

console.log(profileWithDetails) 
// { firstName: "J.S.", lastName": "Bach", instrument: 'organ' }
`
];

const SlideContent = () => (
  <FlexBox height="100%" mt={-10}>
    <Text fontSize={46}>
      <CodeSpan fontSize={42}>Деструктуризация</CodeSpan> позволяет создавать
      переменные из свойств объекта
    </Text>
    <Box>
      {code.map((el, ix) => (
        <SlideCodePane
          showLineNumbers={false}
          size="sm"
          playground={false}
          key={ix}
        >
          {el}
        </SlideCodePane>
      ))}
    </Box>
  </FlexBox>
);

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Деструктуризация"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
