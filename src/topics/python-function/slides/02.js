import { CodeSpan, Notes, Text } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const codeSrc = `
def preprocess(text):
  return text.lower()
`;

const SlideContent = () => (
  <>
    <Text fontSize={32}>
      Зачастую нам надо повторять одно и то же действие во многих частях
      программы или многофайлового проекта. В таких случаях удобно написать
      универсальную <CodeSpan fontSize={28}>функцию</CodeSpan> и
      переиспользовать ее в коде!
    </Text>
    <SlideCodePane
      preset="python"
      size={36}
      playground={true}
      showLineNumbers={false}
    >
      {codeSrc}
    </SlideCodePane>
    <Text fontSize={28} style={{ marginBottom: 0 }}>
      <CodeSpan fontSize={24}>Функции</CodeSpan> - это основа чистого кода,
      обязательная к изучению. Мы уже использовали функции (и методы классов)
      для работы со строками и числами. Сегодня научимся писать свои.
    </Text>
  </>
);

export const Slide02 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading=""
    SlideContent={() => <SlideContent />}
    SlideNotes={null}
  />
);
