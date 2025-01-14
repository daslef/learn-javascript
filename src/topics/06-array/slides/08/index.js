import { DeckSlide, SimpleTabs } from '../../../../components';
import { data } from './data';

const tabNames = ['push', 'unshift', 'splice', 'concat', 'spread'];

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Добавление элементов"
    SlideNotes={null}
    SlideContent={() => <SimpleTabs tabNames={tabNames} data={data} />}
  />
);
