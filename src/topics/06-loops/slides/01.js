import { Notes } from 'spectacle';
import { DeckSection } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Еще одна важнейшая конструкция, которая на порядок расширит наши возможности
    - это циклы
  </Notes>
);

export const Slide01 = ({ ...meta }) => (
  <DeckSection {...meta} SlideNotes={SlideNotes} />
);
