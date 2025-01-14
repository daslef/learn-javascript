import { CodeSpan, FlexBox, Heading, Text, Appear } from 'spectacle';

import { DeckSlide } from '../../../components';
import yodaSad from '../assets/yoda-sad.jpg';

const SlideContent = () => (
  <FlexBox flexDirection="column" alignItems="start" padding={4}>
    <Heading textAlign="left">
      Напишем первую программу (скрипт) на JavaScript
    </Heading>
    <Text lineHeight="52px" style={{ marginTop: 0 }}>
      Достаточно создать документ с расширением <CodeSpan>.js</CodeSpan>{' '}
      (например, <CodeSpan>myprogram.js</CodeSpan>), написать код (например,
      поприветствовать мир <CodeSpan>alert('hello!')</CodeSpan>) - и готово!
    </Text>
    <Appear>
      <Text>Попробуем запустить файл, и... Ничего не произойдет!</Text>
      <img
        style={{
          position: 'fixed',
          right: '170px',
          bottom: '170px'
        }}
        src={yodaSad}
        width={300}
      />
    </Appear>
  </FlexBox>
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    backgroundColor="#1e1e2e"
    subheading=""
    SlideContent={SlideContent}
    SlideNotes={() => null}
  />
);
