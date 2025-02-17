import { DeckSlide, CategoryTabs } from '../../../../components';
import { categories, info } from './data';

export const Slide13 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Методы"
    SlideNotes={null}
    SlideContent={() => (
      <CategoryTabs
        categories={categories}
        info={info}
        initialCode={`const s = 'Lorem ipsum dolor sit amet'`}
      />
    )}
  />
);
