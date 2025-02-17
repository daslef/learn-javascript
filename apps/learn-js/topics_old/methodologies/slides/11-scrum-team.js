import { Slide, Heading, FlexBox, Text, Image } from 'spectacle';

import scrumTeam from '../assets/scrum-team.png';

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

export const Slide11 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      paddingX="120px"
      paddingBottom="40px"
    >
      <Heading fontSize={60} fontWeight="500" padding="0px" letterSpacing={3}>
        <span style={{ fontSize: 20 }}>agile</span> Scrum
      </Heading>
      <Text fontSize={25} lineHeight="32px">
        Команду разработчиков сопровождают <HighLight>скрам-мастер</HighLight> и{' '}
        <HighLight>владелец продукта</HighLight>
      </Text>

      <FlexBox>
        <FlexBox flexDirection="column">
          <Text fontSize={26} lineHeight="40px" margin="10px" padding="10px">
            <HighLight>Владелец продукта</HighLight> является связующим звеном
            между командой разработки и заказчиком. Он переводит видение
            заказчика в список задач.
          </Text>
          <Text fontSize={26} lineHeight="40px" margin="10px" padding="10px">
            <HighLight>Скрам-мастер</HighLight> помогает команде разработки
            работать слаженно и эффективно, при этом конкретных задач команде он
            не дает.
          </Text>
        </FlexBox>
        <Image src={scrumTeam} style={{ width: '45%' }}></Image>
      </FlexBox>
    </FlexBox>
  </Slide>
);
