import { Notes } from 'spectacle';
import { DeckSection } from '../../../components';

const SlideNotes = () => <Notes></Notes>;

export const Slide01 = ({ ...meta }) => (
  <DeckSection {...meta} SlideNotes={SlideNotes} />
);
