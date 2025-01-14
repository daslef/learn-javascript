import { FlexBox, Text, Notes, CodeSpan, Image } from 'spectacle';
import { DeckSlide } from '../../../components';

const SlideNotes = () => <Notes></Notes>;

const SlideContent = () => (
  <>
    <Text>
      Основное назначение <CodeSpan>use-case</CodeSpan>диаграммы — описание
      функциональности и поведения, позволяющее заказчику, конечному
      пользователю и разработчику совместно обсуждать проектируемую или
      существующую систему
    </Text>
    <FlexBox mb="20px" width="100%">
      <Image src={null} />
    </FlexBox>
    <FlexBox mb="0px" width="100%"></FlexBox>
    <Text fontSize={32}>
      Здесь мы определяем акторов (действующих лиц), их взаимодействие с
      системой и ожидаемую функциональность
    </Text>
  </>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Сценарии использования"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
