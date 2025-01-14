import { UnorderedList, ListItem, Appear, FlexBox } from 'spectacle';

import { DeckSlide } from '../../../components';

const StyledListItem = ({ children }) => (
  <Appear>
    <ListItem fontSize={32}>{children}</ListItem>
  </Appear>
);

const text = [
  'ƒ должна решать одну задачу',
  'ƒ должна объяснять, что она делает, названием или комментарием',
  'если аргументов больше двух, возможно ƒ делает слишком много',
  'необязательные аргументы можно передавать в виде объектов',
  'следует покрывать все функции отдельными тестами',
  'не стоит вносить изменения в глобальные методы'
];

const SlideContent = () => (
  <FlexBox height="100%">
    <UnorderedList style={{ marginTop: 0 }}>
      {text.map((el, ix) => (
        <StyledListItem key={ix}>{el}</StyledListItem>
      ))}
      <StyledListItem>
        следует избегать сайд-эффектов:
        <UnorderedList>
          <StyledListItem>сознательных</StyledListItem>
          <StyledListItem>
            случайных (например, для референсных аргументов)
          </StyledListItem>
        </UnorderedList>
      </StyledListItem>
    </UnorderedList>
  </FlexBox>
);

export const Slide12 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Рекомендации"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
