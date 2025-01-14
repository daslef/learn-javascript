import {
  Notes,
  Text,
  UnorderedList,
  ListItem,
  CodeSpan,
  FlexBox,
  Appear
} from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Как создавать численные литералы с нуля и преобразованием типов
    <ul>
      <li>Объяснить экспоненциальную форму (10 в степени)</li>
      <li>Размяться, переводя между системами счисления</li>
      <li>Рекомендовать явно приводить типы для контроля над происходящим</li>
      <li>
        Объяснить, как строка преобразуется к числу: начальные и конечные
        пробелы обрезаются, а оставшиеся символы пытаются преобразоваться в
        число
      </li>
    </ul>
  </Notes>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan fontSize={28}>{children}</CodeSpan>
);

const StyledHeading = ({ children }) => (
  <Text
    fontSize={34}
    fontWeight="bold"
    style={{ marginBottom: 0, marginTop: 0 }}
  >
    {children}
  </Text>
);

const StyledListItem = ({ children }) => (
  <ListItem fontSize={30} style={{ listStyle: 'none', marginLeft: 0 }}>
    {children}
  </ListItem>
);

const SlideContent = () => (
  <>
    <FlexBox alignItems="start">
      <FlexBox flexDirection="column" borderRight="1px solid">
        <StyledHeading>Целочисленные</StyledHeading>
        <UnorderedList>
          <StyledListItem>
            Десятичные <StyledCodeSpan>-45</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            Шестнадцатиричные <StyledCodeSpan>0хff</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            Двоичные <StyledCodeSpan>0b101</StyledCodeSpan>
          </StyledListItem>
          <StyledListItem>
            Восьмиричные <StyledCodeSpan>0o377</StyledCodeSpan>
          </StyledListItem>
        </UnorderedList>
      </FlexBox>
      <Appear>
        <FlexBox flexDirection="column" borderRight="1px solid">
          <StyledHeading>С точкой</StyledHeading>
          <UnorderedList>
            {['185.0022', '.16', '6.03e-10', '0.14e10'].map((el, ix) => (
              <StyledListItem
                style={{ listStyle: 'none' }}
                key={`floating_${ix}`}
              >
                <StyledCodeSpan>{el}</StyledCodeSpan>
              </StyledListItem>
            ))}
          </UnorderedList>
        </FlexBox>
      </Appear>
      <Appear>
        <FlexBox flexDirection="column">
          <StyledHeading>Приведением типов</StyledHeading>
          <UnorderedList>
            {[
              `Number("123") // 123`,
              `Number(true) // 1`,
              `Number(undefined) // NaN`,
              `Number(null) // 0`,
              `+"150" // 150`
            ].map((el, ix) => (
              <StyledListItem
                style={{ listStyle: 'none' }}
                key={`coerce_${ix}`}
              >
                <StyledCodeSpan>{el}</StyledCodeSpan>
              </StyledListItem>
            ))}
          </UnorderedList>
        </FlexBox>
      </Appear>
    </FlexBox>
    <Text fontSize={32} style={{ marginTop: 0 }} textAlign="center" width={1}>
      В длинных литералах удобно применять символы{' '}
      <StyledCodeSpan>_</StyledCodeSpan> для отделения разрядов
    </Text>
  </>
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Инициализация"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
