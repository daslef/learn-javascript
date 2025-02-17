import { Text, Notes, CodeSpan, UnorderedList, ListItem } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Крайние случаи - это ...</li>
      <li>
        Например, если в условии производится обращение к базе данных, но само
        условие редко выполняется, возможно не стоит ставить его на самый верх
      </li>
      <li></li>
    </ul>
  </Notes>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan fontSize={24}>{children}</CodeSpan>
);

const SlideContent = () => {
  return (
    <>
      <Text
        fontSize={34}
        fontWeight="bold"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        Зачастую в качестве условий выступают примитивы или поля объекта.
        Поэтому важно знать, по каким правилам JS будет приводить их к
        логическому типу
      </Text>
      <Text
        fontSize={30}
        fontWeight="bold"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        К <StyledCodeSpan>false</StyledCodeSpan> приводятся:{' '}
        <StyledCodeSpan>0, 0n, NaN, '', null, undefined</StyledCodeSpan>. Все
        остальное - <StyledCodeSpan>true</StyledCodeSpan>.
      </Text>
      <SlideCodePane playground={false} size="sm">{`Boolean('') // false
Boolean('string') // true
Boolean('false') // true
Boolean(0) // false
Boolean(-5) // true
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(function () {}) // true
Boolean({}), Boolean({ key: 42 }) // true, true
Boolean([]), Boolean([1, 2])  // true, true
`}</SlideCodePane>
    </>
  );
};

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Приведение к boolean"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
