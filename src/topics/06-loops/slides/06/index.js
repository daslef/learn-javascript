import { useState } from 'react';
import { Notes } from 'spectacle';
import { DeckSlide, LongReadTabs } from '../../../../components';
import { data } from './data';

const SlideContent = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <LongReadTabs
        data={data}
        tabNames={['for', 'while', 'do...while']}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  );
};

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Классические циклы"
    SlideNotes={() => (
      <Notes>
        Узнаем о циклах и подумаем, как они могут помочь в решении задачи
      </Notes>
    )}
    SlideContent={SlideContent}
  />
);
