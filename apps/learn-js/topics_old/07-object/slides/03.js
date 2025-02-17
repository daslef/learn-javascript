import { DeckSlide, SlideDefinition } from '../../../components';

const content = `{%Объект%} - набор свойств, каждое из которых состоит 
  из названия и значения (любого типа). Почти всё в JavaScript — {%объект%}`;

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideNotes={null}
    SlideContent={() => (
      <SlideDefinition
        content={content}
        quote="doka.guide"
        textFontSize={56}
        codeFontSize={56}
        lineHeight="80px"
      />
    )}
  />
);
