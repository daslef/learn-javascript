import { Deck, Notes } from 'spectacle';
import { theme, template, DeckSection } from '../../components';

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <DeckSection
      heading="§ Решение задач"
      heading_en="problem solving"
      SlideNotes={() => <Notes>Задачи из директории practice-3</Notes>}
    />
  </Deck>
);
