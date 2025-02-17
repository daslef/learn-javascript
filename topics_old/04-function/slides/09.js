import {
  FlexBox,
  CodeSpan,
  UnorderedList,
  ListItem
} from 'spectacle';

import { DeckSlide } from '../../../components';

const ReturnCodeSpan = () => <CodeSpan fontSize={24}>return</CodeSpan>;

const SlideContent = () => (
  <FlexBox flexDirection="column" width={1} height="100%">
    <UnorderedList>
      <ListItem fontSize={32}>
        <ReturnCodeSpan /> может находиться только внутри функции
      </ListItem>
      <ListItem fontSize={32}>
        как только программа доходит до <ReturnCodeSpan />, функция
        останавливается
      </ListItem>
      <ListItem fontSize={32}>
        <ReturnCodeSpan /> можно использовать со значением и без него
      </ListItem>
      <ListItem fontSize={32}>
        <ReturnCodeSpan /> может находиться в любом месте тела функции
      </ListItem>
      <ListItem fontSize={32}>
        в однострочных стрелочных функциях <ReturnCodeSpan /> не нужен
      </ListItem>
      <ListItem fontSize={32}>
        <ReturnCodeSpan /> может использоваться внутри ветвлений, например
        вместо <CodeSpan fontSize={28}>break</CodeSpan>
      </ListItem>
    </UnorderedList>
  </FlexBox>
);

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="return"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
