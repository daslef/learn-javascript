import {
  UnorderedList,
  Notes,
  ListItem,
  Appear,
  CodeSpan,
  Heading
} from '@repo/spectacle';
import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    ...
    <ol>
      <li></li>
      <li></li>
    </ol>
    ...
  </Notes>
);

const SlideContent = () => (
  <>
    <Heading fontSize={42}>Объект в JS</Heading>
    <UnorderedList style={{ marginTop: 0 }}>
      <ListItem>динамическая структура данных...</ListItem>
      <Appear>
        <ListItem>
          ...хранящая набор свойств в парах <CodeSpan>"ключ-значение"</CodeSpan>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          её свойства можно <CodeSpan>изменять</CodeSpan>,{' '}
          <CodeSpan>создавать</CodeSpan>, <CodeSpan>удалять</CodeSpan> прямо в
          процессе выполнения программы.
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>значение свойств может быть любым!</ListItem>
      </Appear>
    </UnorderedList>
  </>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Объекты"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
