import {
  Slide,
  Heading,
  FlexBox,
  Image,
  UnorderedList,
  ListItem
} from 'spectacle';

export const Slide02 = () => (
  <Slide>
    <FlexBox
      height="100%"
      flexDirection="column"
      alignItems="start"
      marginTop="100px"
      paddingLeft="100px"
      position="relative"
    >
      <Heading
        fontSize={60}
        fontWeight="500"
        margin="0px"
        padding="0px"
        letterSpacing={3}
      >
        Определение: Методология в IT
      </Heading>
      <UnorderedList style={{ width: 760, paddingLeft: 0, marginTop: 20 }}>
        <ListItem fontSize={26} lineHeight="38px" style={{ listStyle: 'none' }}>
          - набор методов, принципов и правил для управления разработкой
        </ListItem>
        <ListItem fontSize={26} lineHeight="38px" style={{ listStyle: 'none' }}>
          - переиспользуемая стратегия управления проектами, включающая методы,
          лучшие практики, правила, гайдлайны, шаблоны, чеклисты и иные
          возможности для построения управляемых систем
        </ListItem>
        <ListItem fontSize={26} lineHeight="38px" style={{ listStyle: 'none' }}>
          - дорожная карта, ведущая туда, куда нам нужно :)
        </ListItem>
      </UnorderedList>
      <div
        style={{
          position: 'absolute',
          top: 30,
          left: 68,
          width: '64%',
          height: '82%',
          border: '4px solid #333'
        }}
      ></div>
    </FlexBox>
  </Slide>
);
