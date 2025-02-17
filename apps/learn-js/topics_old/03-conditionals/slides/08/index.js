import { useState } from 'react';
import { Text, Notes, CodeSpan } from 'spectacle';
import { DeckSlide, LongReadTabs } from '../../../../components';
import { data } from './data';

const SlideContent = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Text fontSize={38} fontWeight="bold" style={{ marginTop: 0 }}>
        Главная управляющая конструкция в программировании - это{' '}
        <CodeSpan fontSize={32}>if / else</CodeSpan>
      </Text>
      <LongReadTabs
        data={data}
        tabNames={['Бинарный выбор', 'Множественный выбор', 'Одинарный выбор']}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  );
};

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="if / else"
    SlideNotes={() => (
      <Notes>
        Теперь, когда у нас есть диаграмма флоу, пора узнать, как ее исполнить в
        коде
      </Notes>
    )}
    SlideContent={SlideContent}
  />
);
