import { CodeSpan, Notes } from 'spectacle';

import { DeckSlide, SimpleTabs } from '../../../../components';

import { data } from './data';

const SlideNotes = () => {
  <Notes>
    Объекты сравниваются не по значению, а по адресу в памяти. Поэтому сравнение
    через операторы <CodeSpan fontSize={20}>===, ==</CodeSpan> и{' '}
    <CodeSpan fontSize={18}>Object.is()</CodeSpan> даст истину только при
    сравнении объекта с самим собой или своей копией
  </Notes>;
};

const tabNames = [
  'перебором свойств',
  'поверхностное',
  'глубокое',
  'stringify'
];

const SlideContent = () => <SimpleTabs tabNames={tabNames} data={data} />;

export const Slide13 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Сравнение объектов"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
