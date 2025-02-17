import { useState } from 'react';
import { DeckSlide, LongReadTabs } from '../../../../components';
import { data } from './data';

const SlideContent = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <LongReadTabs
        data={data}
        tabNames={['обновление', 'создание', 'удаление']}
        current={current}
        setCurrent={setCurrent}
      />
    </>
  );
};

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Модификация"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
