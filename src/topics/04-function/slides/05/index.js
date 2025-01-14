import {
  FlexBox,
  Text,
  Heading,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem
} from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';
import { code } from './data';

const SlideNotes = () => <Notes></Notes>;

const BlockHeading = ({ text }) => (
  <FlexBox
    width="100%"
    alignItems="start"
    backgroundColor="rgba(100,100,100,0.1)"
    borderRadius="30px"
  >
    <Heading fontSize={40}>{text}</Heading>
  </FlexBox>
);

const SlideContent = () => (
  <>
    <BlockHeading text="Объявление функции (function declaration)" />
    <Text fontSize={32} style={{ marginBottom: 0 }}>
      Олдскульный способ, его особенность - такие функции "всплывают" -
      переносятся наверх скоупа, давая возможность использовать функцию до
      объявления (<CodeSpan fontSize={26}>hoisting</CodeSpan>)
    </Text>
    <FlexBox alignItems="start" justifyContent="start">
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
      <SlideCodePane playground={false} size="sm">
        {code.declaration.syntax}
      </SlideCodePane>
      <UnorderedList>
        <ListItem fontSize={30}>
          <CodeSpan fontSize={26}>параметров</CodeSpan> может быть сколь угодно
          много (в том числе 0)
        </ListItem>
        <ListItem fontSize={30}>
          <CodeSpan fontSize={26}>имя функции</CodeSpan> должно быть корректным
          и осмысленным
        </ListItem>
        <ListItem fontSize={30}>
          <CodeSpan fontSize={26}>тело функции</CodeSpan> заключено в{' '}
          <CodeSpan fontSize={26}>{`{}`}</CodeSpan>
        </ListItem>
        <ListItem fontSize={30}>
          функция может иметь <CodeSpan fontSize={26}>return</CodeSpan>
        </ListItem>
      </UnorderedList>
    </FlexBox>
    <FlexBox alignItems="start" justifyContent="stretch" mt={20} mb={30}>
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
      <SlideCodePane>{code.declaration.example}</SlideCodePane>
    </FlexBox>

    <BlockHeading text="Функциональное выражение (function expression)" />
    <Text fontSize={32} style={{ marginBottom: 0 }}>
      Здесь функция становится значением переменной. Такая функция не всплывает,
      то есть обязательно должна быть задана до использования
    </Text>
    <FlexBox alignItems="start" justifyContent="start">
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
      <SlideCodePane playground={false}>{code.expression.syntax}</SlideCodePane>
    </FlexBox>
    <FlexBox alignItems="start" justifyContent="stretch" mt={20} mb={30}>
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
      <SlideCodePane>{code.expression.example}</SlideCodePane>
    </FlexBox>
    <BlockHeading text="Стрелочные функции (arrow functions)" />
    <Text fontSize={32} style={{ marginBottom: 0 }}>
      Внешне похожи на функциональные выражения, записанные более лаконично. Но
      самое важное отличие - в отсутствии контекста (рассмотрим далее)
    </Text>
    <FlexBox alignItems="start" justifyContent="start">
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
      <SlideCodePane playground={false}>{code.arrow.syntax}</SlideCodePane>
    </FlexBox>
    <FlexBox alignItems="start" justifyContent="stretch" mt={20} mb={30}>
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
      <SlideCodePane>{code.arrow.example}</SlideCodePane>
    </FlexBox>
  </>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Создание функции"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
