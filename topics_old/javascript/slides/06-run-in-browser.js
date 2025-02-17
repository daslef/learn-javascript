import { CodeSpan, FlexBox, Heading, Text, Appear } from 'spectacle';

import { DeckSlide } from '../../../components';
import yodaHappy from '../assets/yoda-happy.gif';

const SlideContent = () => (
  <FlexBox flexDirection="column" alignItems="start" padding={4}>
    <Heading style={{ marginBottom: 0 }}>
      Запустим программу в браузерном окружении!
    </Heading>
    <Text lineHeight="50px">
      Создадим <CodeSpan fontSize={24}>html-документ</CodeSpan> (например,{' '}
      <CodeSpan fontSize={24}>index.html</CodeSpan>), и поместим внутрь{' '}
      <CodeSpan fontSize={24}>body</CodeSpan> элемент{' '}
      <CodeSpan
        fontSize={24}
      >{`<script src='./myprogram.js'></script>`}</CodeSpan>
    </Text>
    <Appear>
      <Text style={{ marginBottom: 0 }}>
        Откроем в браузере - готово! Программа приветствует нас!
      </Text>

      <img
        style={{
          position: 'fixed',
          right: '130px',
          bottom: '180px'
        }}
        src={yodaHappy}
        width={240}
      />
    </Appear>
  </FlexBox>
);

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    backgroundColor="#1e1e2e"
    subheading="Браузер"
    SlideContent={SlideContent}
    SlideNotes={() => null}
  />
);
