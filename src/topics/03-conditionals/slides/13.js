import { Notes, Heading, FlexBox } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideContent = () => (
  <FlexBox height="100%">
    <Heading fontSize={38}>
      Определить тип △, учитывая, что △ существует только тогда, когда сумма
      любых двух сторон больше третьей
    </Heading>
    <SlideCodePane>
      {`
const a = prompt('A: ')
const b = prompt('B: ')
const c = prompt('C: ')`}
    </SlideCodePane>
  </FlexBox>
);

export const Slide13 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Задача"
    SlideNotes={() => (
      <Notes>{`Алгоритм -> Реализация -> Обсуждение -> Рефакторинг`}</Notes>
    )}
    SlideContent={SlideContent}
  />
);
