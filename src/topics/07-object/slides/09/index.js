import { FlexBox, Text } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';

import { code } from './data';

const SlideContent = () => (
  <>
    <Text fontSize={32}>
      Частая ситуация в разработке - когда нужно использовать существующие
      переменные как значения для свойств с тем же именем. Например:
    </Text>
    <FlexBox alignItems="stretch">
      <SlideCodePane playground={false} showLineNumbers={false} size="sm">
        {code.legacy.global}
      </SlideCodePane>
      <SlideCodePane playground={false} showLineNumbers={false} size="sm">
        {code.legacy.function}
      </SlideCodePane>
    </FlexBox>
    <Text fontSize={32} fontWeight="bold">
      Существует более удобный синтаксис:
    </Text>
    <FlexBox alignItems="stretch">
      <SlideCodePane playground={false} showLineNumbers={false} size="sm">
        {code.modern.global}
      </SlideCodePane>
      <SlideCodePane playground={false} showLineNumbers={false} size="sm">
        {code.modern.function}
      </SlideCodePane>
    </FlexBox>
    <Text fontSize={32}>
      Или их комбинация, если мы хотим, к примеру, зашифровать пароль:
    </Text>
    <SlideCodePane playground={false} showLineNumbers={false} size="sm">
      {code.modern.combo}
    </SlideCodePane>
  </>
);

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Cвойства из переменных"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
