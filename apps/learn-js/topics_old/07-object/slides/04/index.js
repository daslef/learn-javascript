import { Notes, UnorderedList, ListItem, CodeSpan, Box } from 'spectacle';
import { DeckSlide, SlideCodePane } from '../../../../components';

import { code } from './data';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Брэкеты - лучший вариант для большинства случаев</li>
      <li>
        Конструктор преобразуя значение в скобках в объект, либо создает пустой
        объект. Используется редко, брэкетов как правило достаточно.
      </li>
      <li>
        Object.assign копирует все перечисляемые личные свойства из одного или
        более объектов в целевой объект, обновляя значения при совпадении имен
        свойств
      </li>
      <li>
        Object.fromEntries создает объекта из массива пар [ключ: значение]
      </li>
      <li>
        Оператор спреад распаковывает последовательность, что, например
        позволяет лаконично делать копии объекта или объединять их
      </li>
    </ul>
  </Notes>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan
    style={{
      paddingTop: 18,
      width: '420px',
      fontSize: 30,
      lineHeight: '52px',
      background: 'transparent'
    }}
  >
    {children}
  </CodeSpan>
);

const flexStyle = {
  display: 'flex',
  alignItems: 'start',
  marginBottom: 60
};

const SlideContent = () => (
  <>
    <UnorderedList>
      {[
        ['{}', 'brackets', 'md'],
        ['new Object()', 'constructor', 'md'],
        ['Object.fromEntries()', 'fromEntries', 'sm'],
        ['Spread', 'spread', 'sm'],
        ['Object.assign()', 'assign', 'sm'],
        ['Object.create()', 'create', 'sm']
      ].map(([text, id, size], ix) => (
        <ListItem style={flexStyle}>
          <StyledCodeSpan>{text}</StyledCodeSpan>
          <Box style={{ flexGrow: 1 }}>
            <SlideCodePane
              showLineNumbers={false}
              playground={false}
              size={size}
            >
              {code[id]}
            </SlideCodePane>
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
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
