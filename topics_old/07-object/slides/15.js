import { UnorderedList, ListItem, Appear, FlexBox } from 'spectacle';

import { DeckSlide } from '../../../components';

const StyledListItem = ({ children }) => (
  <Appear>
    <ListItem fontSize={32}>{children}</ListItem>
  </Appear>
);

const text = [
  'массив является расширением Object',
  'массив хранится в куче, референсный тип',
  'элементы хранятся в непрерывной области памяти',
  'операции с концом массива эффективней, чем с началом',
  'сравнивать массивы на равенство бесполезно, всегда будет false',
  'следует быть осторожным, передавая массивы как аргументы в функцию',
  'удобный способ создать переменные из элементов массива - деструктуризация'
];

const SlideContent = () => (
  <FlexBox height="100%">
    <UnorderedList style={{ marginTop: 0 }}>
      {text.map((el, ix) => (
        <StyledListItem key={ix}>{el}</StyledListItem>
      ))}
    </UnorderedList>
  </FlexBox>
);

export const Slide15 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Особенности"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
