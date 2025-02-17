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
    <Text fontWeight="bold">Cпособы создания строки</Text>
    <UnorderedList>
      <ListItem>
        Двойными кавычками <CodeSpan>""</CodeSpan>
      </ListItem>
      <ListItem>
        Одинарными кавычками <CodeSpan>''</CodeSpan>
      </ListItem>
      <ListItem>
        Бэктиками <CodeSpan>``</CodeSpan>
      </ListItem>
    </UnorderedList>
    <Text fontSize={32}>
      Первые два варианта взаимозаменяемы, третий используется в особом случае -
      для создания <CodeSpan fontSize={28}>шаблонных строк</CodeSpan>
    </Text>
  </>
);

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Инициализация"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
