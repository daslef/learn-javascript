import { Slide, Heading, FlexBox, Text, Image } from 'spectacle';

import agileScheme from '../assets/agile-scheme.png';

export const Slide04 = () => (
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
            Сформулирован в 2001 как часть манифеста, целью которого было
            повысить продуктивность при разработке программного обеспечения.
          </Text>
          <Text lineHeight="42px">
            Философия Agile основана на управлении временем, позволяет создавать
            проект последовательно, малыми частями. Главное преимущество -
            возможность адаптироваться и вносить изменения на любой из стадий.
          </Text>
        </div>
        <Image src={agileScheme} style={{ width: '30%' }} />
      </FlexBox>
    </FlexBox>
  </Slide>
);
