import {
  Slide,
  Heading,
  FlexBox,
  Text,
  UnorderedList,
  ListItem
} from 'spectacle';

export const Slide14 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="start"
      paddingLeft="160px"
      paddingRight="80px"
      paddingBottom="20px"
    >
      <Heading
        fontSize={60}
        fontWeight="500"
        padding="0px"
        letterSpacing={3}
        style={{ alignSelf: 'center' }}
      >
        <span style={{ fontSize: 20 }}>agile</span> XP
      </Heading>
      <Text fontSize={32} lineHeight="48px" margin="0px" padding="10px">
        "Экстремальное программирование" - еще одна практическая методология,
        базирующаяся на идеях Agile. Основа - спринты, непрерывные тестирование
        и планирование, приемка спринтов заказчиком.{' '}
      </Text>
      <Text fontSize={32} lineHeight="48px" margin="0px" padding="0px 10px">
        Несколько примечательных подходов, принятых в XP:
      </Text>
      <UnorderedList margin="0px 18px">
        <ListItem>парное программирование (вместо код-ревью)</ListItem>
        <ListItem>
          Test-Driven Development (разработка, движимая тестами)
        </ListItem>
        <ListItem>
          непрерывная интеграция (вместо интеграционных тестов)
        </ListItem>
        <ListItem>стандарты (гайдлайны) по написанию кода</ListItem>
      </UnorderedList>
    </FlexBox>
  </Slide>
);
