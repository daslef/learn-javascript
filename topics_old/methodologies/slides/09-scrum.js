import { Slide, Heading, FlexBox, Text } from 'spectacle';

const HighLight = ({ children }) => (
  <span
    style={{
      display: 'inline-block',
      borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
      padding: '0.125em',
      lineHeight: '1em',
      border: 'solid 5px hsla(0, 95%, 65%, 1)'
    }}
  >
    {children}
  </span>
);

export const Slide09 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="80px"
      paddingBottom="100px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        <span style={{ fontSize: 20 }}>agile</span> Scrum
      </Heading>
      <FlexBox flexDirection="column">
        <Text fontSize={32} lineHeight="42px" margin="0px" padding="10px">
          Agile - это скорее философия, но на базе нее были созданы более
          практические методологии, одна из которых называется{' '}
          <HighLight>Scrum</HighLight>
        </Text>
        <Text fontSize={26} lineHeight="42px" margin="0px" padding="10px">
          В Scrum заказчик определяет желаемый итоговый результат, а как именно
          решать поставленные задачи - команда решает сама. Поэтому этап
          согласования требований упрощается и может быть исключен.
        </Text>
        <Text fontSize={26} lineHeight="42px" margin="0px" padding="10px">
          Время делится на участки по 2-4 недели -{' '}
          <HighLight>спринты</HighLight>. Спринт начинается с формирования{' '}
          <HighLight>бэклога</HighLight> - списка идей, которые команда
          планирует реализовать в коде. По окончанию спринта команда презентует
          готовый к использованию продукт.
        </Text>
      </FlexBox>
    </FlexBox>
  </Slide>
);
