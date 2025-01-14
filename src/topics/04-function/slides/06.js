import { Text, CodeSpan, UnorderedList, ListItem, FlexBox } from 'spectacle';

import { DeckSlide } from '../../../components';

const StyledListItem = ({ children }) => (
  <ListItem fontSize={24}>{children}</ListItem>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan fontSize={18}>{children}</CodeSpan>
);

const SlideContent = () => (
  <>
    <Text
      fontSize={32}
      fontWeight="bold"
      style={{ marginTop: 0, marginBottom: 0 }}
    >
      <span style={{ borderBottom: '1px solid' }}>Параметр</span> - это
      переменная, указанная в объявлении функции
    </Text>
    <Text fontSize={32} fontWeight="bold" style={{ marginBottom: 10 }}>
      <span style={{ borderBottom: '1px solid' }}>Аргумент</span> - значение,
      которое передается функции при ее вызове
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
        Особенности:
      </Text>
      <UnorderedList style={{ marginTop: 0 }}>
        <StyledListItem>
          Если нет параметров, то не должно быть и аргументов
        </StyledListItem>
        <StyledListItem>
          Если определено <StyledCodeSpan>N</StyledCodeSpan> параметров, должно
          быть передано ровно <StyledCodeSpan>N</StyledCodeSpan> аргументов
        </StyledListItem>
        <StyledListItem>
          Исключение из предыдущего правила: можно задавать{' '}
          <StyledCodeSpan>параметры по умолчанию</StyledCodeSpan>, например{' '}
          <StyledCodeSpan>function f(text, style="normal")</StyledCodeSpan>. В
          таком случае, если при вызове функции не будет передан{' '}
          <StyledCodeSpan>style</StyledCodeSpan>, функция будет считать, что его
          значение - <StyledCodeSpan>normal</StyledCodeSpan>
        </StyledListItem>
      </UnorderedList>
    </FlexBox>
  </>
);

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Параметры и аргументы"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
