import { Slide, Heading, FlexBox, Text, Image } from 'spectacle';

import waterfallScheme from '../assets/waterfall-scheme.png';

export const Slide03 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="100px"
      paddingBottom="60px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        Waterfall
      </Heading>
      <div>
        <FlexBox justifyContent="start">
          <Text lineHeight="42px" style={{ flexBasis: '60%' }}>
            Это простейшая методология из 1970-х. Процесс разработки
            рассматривается как поток, где каждая фаза начинается только по
            окончанию предыдущей. Модель хороша для коротких и несложных
            проектов.
          </Text>
          <Image src={waterfallScheme} style={{ width: '30%' }} />
        </FlexBox>
        <Text lineHeight="42px">
          Главные недостатки - (1) модель не предусматривает пересмотра
          предыдущих этапов и (2) заказчик (или пользователь) видит результат
          только на завершающих стадиях, что повышает риски.
        </Text>
      </div>
    </FlexBox>
  </Slide>
);
