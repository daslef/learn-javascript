import {
  Text,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem,
  FlexBox
} from 'spectacle';

import { DeckSlide } from '../../../components';

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

const StyledListItem = ({ children }) => (
  <ListItem fontSize={24}>{children}</ListItem>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan fontSize={28}>{children}</CodeSpan>
);

const SlideContent = () => {
  return (
    <>
      <Text
        fontSize={32}
        fontWeight="bold"
        style={{ marginTop: 0, marginBottom: 0 }}
      >
        <span style={{ borderBottom: '1px solid' }}>Условие</span> - это
        переменная или выражение, приводимые к типу{' '}
        <StyledCodeSpan>boolean</StyledCodeSpan>
      </Text>
      <Text fontSize={32} fontWeight="bold" style={{ marginBottom: 10 }}>
        <span style={{ borderBottom: '1px solid' }}>Блок кода</span> - операция
        или последовательность операций, заключенная в{' '}
        <StyledCodeSpan>{`\{\}`}</StyledCodeSpan>
      </Text>
      <FlexBox alignItems="start">
        <Text
          fontSize={32}
          fontWeight="bold"
          style={{
            marginTop: 0,
            marginBottom: 0,
            borderBottom: '2px solid white'
          }}
        >
          Примеры условий:
        </Text>
        <UnorderedList style={{ marginTop: 0 }}>
          <StyledListItem>
            <StyledCodeSpan>(true)</StyledCodeSpan>,{' '}
            <StyledCodeSpan>(false)</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            <StyledCodeSpan>(x)</StyledCodeSpan>,{' '}
            <StyledCodeSpan>(!x)</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            <StyledCodeSpan>(x &gt; 10 || y &lt; 15 && n !== 2)</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            <StyledCodeSpan>(user.isAuth)</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            <StyledCodeSpan>(name.startsWith('Mr.'))</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            <StyledCodeSpan>(hasPermissions())</StyledCodeSpan>
          </StyledListItem>
        </UnorderedList>
      </FlexBox>
    </>
  );
};

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Условия и блоки кода"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
