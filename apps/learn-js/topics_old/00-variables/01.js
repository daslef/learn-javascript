import { Notes } from 'spectacle';
import { DeckSection } from '../../../components';

const SlideNotes = () => <Notes>С какими типами данных мы уже знакомы?</Notes>;

export const Slide01 = () => {
  return (
    <DeckSection
      heading="§ Где живут переменные?"
      heading_en="Memory management"
      SlideNotes={SlideNotes}
    />
  );
};
