import { DeckSlide, CategoryTabs } from '../../../../components';
import { categories, info } from './data';

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Прочие методы"
    SlideNotes={null}
    SlideContent={() => (
      <CategoryTabs
        categories={categories}
        info={info}
        initialCode={`const fruits = ['🍇', '🍍', '🍌', '🍇', '🍉']`}
      />
    )}
  />
);
