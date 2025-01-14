import { DeckSlide, SimpleTabs } from '../../../../components';
import { data } from './data';

const tabNames = ['pop', 'shift', 'splice'];

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Удаление элементов"
    SlideNotes={null}
    SlideContent={() => <SimpleTabs tabNames={tabNames} data={data} />}
  />
);
