import { FlexBox, Text, CodeSpan } from 'spectacle';

import { DeckSlide, SlideCodePane, SimpleTabs } from '../../../../components';

import { data } from './data';

const tabNames = ['keys', 'values', 'entries'];

const SlideContent = () => (
  <FlexBox flexDirection="column" alignItems="start">
    <Text fontSize={28} style={{ marginTop: -10 }}>
      Также можно воспользоваться методами{' '}
      <CodeSpan fontSize={20}>.keys(), .values(), .entries()</CodeSpan> и
      перебирать как массив
    </Text>
    <SimpleTabs tabNames={tabNames} data={data} />
  </FlexBox>
);

export const Slide12 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Итерирование"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
