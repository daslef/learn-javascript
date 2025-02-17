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

export const Slide10 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="100px"
      paddingBottom="100px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        <span style={{ fontSize: 20 }}>agile</span> Scrum
      </Heading>
      <FlexBox flexDirection="column">
        <Text fontSize={36} lineHeight="52px" margin="10px" padding="10px">
          Спринт сопровождается <HighLight>daily</HighLight> - ежедневными
          встречами, на которых команда обсуждает текущий прогресс по задачам, а
          так же возможности для улучшения процессов.
        </Text>
        <Text fontSize={36} lineHeight="52px" margin="10px" padding="10px">
          Завершается спринт <HighLight>ретроспективой</HighLight>. Подводятся
          итоги спринта: что было сделано, а что нет, и как сделать более
          успешным следующий спринт.
        </Text>
      </FlexBox>
    </FlexBox>
  </Slide>
);
