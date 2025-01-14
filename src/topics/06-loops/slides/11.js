import { UnorderedList, ListItem, Appear, FlexBox } from 'spectacle';

import { DeckSlide } from '../../../components';

const StyledListItem = ({ children }) => (
  <Appear>
    <ListItem fontSize={32}>{children}</ListItem>
  </Appear>
);

const text = [
  'циклы могут быть вложены друг в друга (например, для двумерного массива)',
  'для вложенных циклов break выведет на один уровень выше',
  'если нужно выйти из нескольких циклов сразу, можно использовать метки*',
  'возможно создать бесконечный цикл, предусмотрев выход по break или return',
  'если тело цикла состоит из одной инструкии, можно не использовать {}',
  'в цикле for любая из частей конструкции может отсутствовать'
];

const SlideContent = () => (
  <FlexBox height="100%">
    <UnorderedList style={{ marginTop: 0 }}>
      <ListItem fontSize={32}>
        условием цикла может быть любое выражение или переменная
      </ListItem>
      {text.map((el, ix) => (
        <StyledListItem key={ix}>{el}</StyledListItem>
      ))}
    </UnorderedList>
  </FlexBox>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Особенности"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
