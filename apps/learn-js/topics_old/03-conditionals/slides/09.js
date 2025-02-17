import {
  Text,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem,
  Appear
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
  <Appear>
    <ListItem fontSize={24}>{children}</ListItem>
  </Appear>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan fontSize={22}>{children}</CodeSpan>
);

const SlideContent = () => (
  <>
    <Text
      fontSize={34}
      fontWeight="bold"
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      Рекомендации по применению <StyledCodeSpan>if / else</StyledCodeSpan>
    </Text>
    <UnorderedList style={{ marginTop: 0 }}>
      <StyledListItem>обычно первыми проверяются крайние случаи</StyledListItem>
      <StyledListItem>
        учитывать вычислительную сложность и длительность расчета условий
      </StyledListItem>
      <StyledListItem>
        следить за читаемостью, распутывать вложенные ветвления
      </StyledListItem>
      <StyledListItem>
        внимательно проверять составные условия (логическая арифметика)
      </StyledListItem>
      <StyledListItem>
        <StyledCodeSpan>{`if (hasRole === true)`}</StyledCodeSpan> можно
        заменить на <StyledCodeSpan>{`if (hasRole)`}</StyledCodeSpan>
      </StyledListItem>
      <StyledListItem>
        <StyledCodeSpan>{`if (hasRole === false)`}</StyledCodeSpan> можно
        заменить на <StyledCodeSpan>{`if (!hasRole)`}</StyledCodeSpan>
      </StyledListItem>
      <StyledListItem>
        для условного присваивания значения переменной попробуйте{' '}
        <StyledCodeSpan>? :</StyledCodeSpan>
      </StyledListItem>
      <StyledListItem>
        иногда бинарное условие можно заменить одиночным
      </StyledListItem>
      <StyledListItem>
        иногда одиночное условие можно заменить оператором{' '}
        <StyledCodeSpan>&&</StyledCodeSpan>, <StyledCodeSpan>||</StyledCodeSpan>{' '}
        или <StyledCodeSpan>??</StyledCodeSpan>
      </StyledListItem>
    </UnorderedList>
  </>
);

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="if / else"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
