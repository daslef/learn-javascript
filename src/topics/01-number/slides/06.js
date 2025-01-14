import { Text, CodeSpan, FlexBox } from 'spectacle';
import { DeckSlide } from '../../../components';

const SlideContent = () => (
  <FlexBox height="100%" flexDirection="column" alignItems="start">
    <Text>
      <CodeSpan fontSize={60}>0.2 + 0.4 === 0.6000000000000001</CodeSpan>
    </Text>
    <Text fontSize={40} style={{ marginBottom: 0 }}>
      Не все числа могут быть точно записаны в двоичном виде (например, ¹⁄₃ или
      ⅐ ), что порой приводит к спецэффектам
    </Text>
    <Text fontSize={34} style={{ marginBottom: 0 }}>
      Если в приложении критически важна точность (fintech или ecommerce), лучше
      оперировать целыми числами (например,{' '}
      <CodeSpan fontSize={30}>8.7 рубля</CodeSpan> хранить как{' '}
      <CodeSpan fontSize={30}>870 копеек</CodeSpan>)
    </Text>
  </FlexBox>
);

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Неточные вычисления"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
