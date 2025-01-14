import { DeckSlide, SlideDefinition } from '../../../components';

const content = `{%Проектирование%} — это этап разработки программного обеспечения, во время которого происходит «перевод» требований к конечному продукту на язык разработчиков. Результат этого процесса — документ, который описывает архитектуру проекта, хранение данных, алгоритмы и флоу пользователя`;

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Определение"
    SlideNotes={null}
    SlideContent={() => (
      <SlideDefinition
        content={content}
        lineHeight="78px"
        textFontSize={42}
        codeFontSize={42}
      />
    )}
  />
);
