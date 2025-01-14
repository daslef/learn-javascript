import {
  FlexBox,
  Text,
  Notes,
  CodeSpan,
  UnorderedList,
  ListItem
} from 'spectacle';
import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Индексация с нуля
    <ol>
      <li>Как обратиться к элементу "user737"?</li>
      <li>Что выдаст обращение по индексу 3?</li>
      <li>Как обратиться к последнему элементу?</li>
    </ol>
  </Notes>
);

const SlideContent = () => (
  <FlexBox flexDirection="column" height="100%">
    <FlexBox
      style={{ padding: '30px 20px', border: '4px solid rgba(0,0,0,0.7)' }}
    >
      {['moderator', 'dev8', 'user737', 'exampleUser'].map((el, ix) => (
        <FlexBox flexDirection="column" px={5}>
          <CodeSpan
            lineHeight="60px"
            fontSize={26}
            textAlign="center"
            style={{ width: 240, backgroundColor: 'salmon' }}
          >
            {el}
          </CodeSpan>
          <Text
            fontSize={20}
            fontWeight="bold"
            textAlign="center"
            style={{
              width: 26,
              backgroundColor: 'rgba(0,0,0,0.4)',
              borderRadius: '50%'
            }}
          >
            {ix}
          </Text>
        </FlexBox>
      ))}
    </FlexBox>
    <UnorderedList>
      <ListItem>массивы хранят элементы в пронумерованных «ячейках»</ListItem>
      <ListItem>нумерация начинается с нуля</ListItem>
      <ListItem>
        номера называют <CodeSpan fontSize={36}>индексами</CodeSpan>
      </ListItem>
    </UnorderedList>
  </FlexBox>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Внутреннее устройство"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
