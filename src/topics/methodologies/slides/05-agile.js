import { Slide, Heading, FlexBox, Text, Image } from 'spectacle';

import agileScheme from '../assets/agile-scheme.png';

export const Slide05 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="80px"
      paddingBottom="60px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        Agile
      </Heading>
      <FlexBox justifyContent="start">
        <div style={{ flexBasis: '70%' }}>
          <Text lineHeight="42px">
            Подход Agile предполагает контроль процесса клиентом. Клиент должен
            быть готов выделять время на просмотр результатов спринтов, их
            оценку, возможный пересмотр требований.
          </Text>
          <Text lineHeight="42px">
            Этот подход хорош в тех ситуациях, когда быть первым - значит
            получить всё (например, стоит цель занять новый рынок), либо если
            требования могут измениться в любой момент.
          </Text>
        </div>
        <Image src={agileScheme} style={{ width: '30%' }} />
      </FlexBox>
    </FlexBox>
  </Slide>
);
