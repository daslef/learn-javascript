import { Text, Notes, FlexBox } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';
import { code } from './data';

const SlideNotes = () => (
  <Notes>
    Что, если есть такие особые ситуации, при которых цикл нет смысла доматывать
    до конца? Какие могут быть примеры?
  </Notes>
);

const SlideContent = () => {
  return (
    <>
      <Text
        fontSize={36}
        fontWeight="bold"
        style={{ marginTop: -10, marginBottom: 0 }}
      >
        <span style={{ borderBottom: '1px solid' }}>break</span> - оператор,
        позволяющий выйти из цикла до его завершения
      </Text>
      <Text fontSize={36} fontWeight="bold" style={{ marginBottom: 10 }}>
        <span style={{ borderBottom: '1px solid' }}>continue</span> - оператор
        для перехода к следующей итерации цикла
      </Text>
      <FlexBox
        style={{ marginTop: 0 }}
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="start"
      >
        <FlexBox flexDirection="column">
          <SlideCodePane showLineNumbers={false} size="xs" playground={false}>
            {code[0]}
          </SlideCodePane>
          <SlideCodePane showLineNumbers={false} size="xs" playground={false}>
            {code[3]}
          </SlideCodePane>
        </FlexBox>
        <SlideCodePane showLineNumbers={false} size="xs" playground={false}>
          {code[1]}
        </SlideCodePane>
        <SlideCodePane showLineNumbers={false} size="xs" playground={false}>
          {code[2]}
        </SlideCodePane>
      </FlexBox>
    </>
  );
};

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="break и continue"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
