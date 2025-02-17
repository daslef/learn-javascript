import { Notes, Text, UnorderedList, ListItem, CodeSpan } from 'spectacle';
import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Показать пример с "" внутри '' и наоборот</li>
      <li>Кратко, на будущее, нарисовать пример шаблонной строки</li>
    </ul>
  </Notes>
);

const SlideContent = () => (
  <>
    <Text fontWeight="bold">Проектирование веб-приложения</Text>
    <UnorderedList>
      <ListItem>Выявление сценариев использования</ListItem>
      <ListItem>Построение диаграммы классов</ListItem>
      <ListItem>Разработка алгоритма (флоу)</ListItem>
      <ListItem>Проектирование UX/UI</ListItem>
      <ListItem>Проектирование архитектуры</ListItem>
    </UnorderedList>
  </>
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading=""
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
