import { FlexBox, Text, CodeSpan } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideContent = () => (
  <>
    <Text style={{ marginTop: 30 }}>Базовая арифметика</Text>
    <FlexBox mb="0px" ml={30}>
      {['+', '-', '*', '/', '%', '()'].map((el, ix) => (
        <CodeSpan key={`math_${ix}`} mr={10} px={33} fontSize={32}>
          {el}
        </CodeSpan>
      ))}
    </FlexBox>
    <Text style={{ marginTop: 30 }}>Операции сравнения</Text>
    <FlexBox mb="0px" ml={30}>
      {['==', '!=', '===', '!==', '<', '>', '>=', '<='].map((el, ix) => (
        <CodeSpan
          key={`compare_${ix}`}
          mr={10}
          px={33}
          fontSize={32}
          style={ix < 2 ? { background: 'rgba(255,0,0,0.5)' } : null}
        >
          {el}
        </CodeSpan>
      ))}
    </FlexBox>
    <Text style={{ marginTop: 30 }}>Операторы присваивания</Text>
    <FlexBox mb={0} ml={30} alignItems="start">
      {['x = 10', 'x += 5', 'x -= 20', 'x *= 2', 'x /= 3'].map((el, ix) => (
        <CodeSpan mr={10} px={33} fontSize={32} key={`assign_${ix}`}>
          {el}
        </CodeSpan>
      ))}
    </FlexBox>
    <FlexBox mt={0} mb={0} ml={-4} alignItems="start">
      <SlideCodePane title="hey" playground={false}>{`
      let x = 10;
      let y = 20;

      x = y;
      y = 20;
      // чему равны x и y?
      `}</SlideCodePane>
      <SlideCodePane size="sm" playground={false}>{`
      let x = 10;
      x = x + 5
      x -= 10
      x *= 2
      x - 2
      x = x - 2
      x++
      x /= 3
      // чему равен х после каждого шага
      `}</SlideCodePane>
    </FlexBox>
    <Text>Инкремент и декремент</Text>
    <FlexBox mb="0px" ml={30}>
      {['x++', 'x--', '--x', '++x'].map((el, ix) => (
        <CodeSpan key={`inc_${ix}`} mr={10} px={33} fontSize={32}>
          {el}
        </CodeSpan>
      ))}
    </FlexBox>
    <Text style={{ marginTop: 30 }}>Math</Text>
    <Text fontSize={34} style={{ marginTop: -20 }}>
      <CodeSpan fontSize={30}>Math</CodeSpan> - объект, содержащий коллекцию
      методов (взятие корня, модуль, округление, тригонометрия, работа с
      логарифмами, и другие) и полезных констант
    </Text>
  </>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Операторы"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
