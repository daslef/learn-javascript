import { Notes, UnorderedList, ListItem, CodeSpan } from 'spectacle';
import { DeckSlide, SlideCodePane } from '../../../../components';

import { code } from './data';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Брэкеты - лучший вариант для большинства случаев</li>
      <li>
        При использовании конструктора нужно быть осторожным при обработки целых
        чисел. Array(2) не создаст [2], а создаст [] длиной 2 пустых слота. В
        таких случаях лучше использовать Array.of
      </li>
      <li>
        Array.from удобен, если при создании массива нужно выполнить
        преобразование. Также, через него можно создавать последовательности.
      </li>
      <li>
        Оператор спреад распаковывает последовательность, что, например
        позволяет лаконично делать копии массивов, распаковывать множества и
        строки
      </li>
    </ul>
  </Notes>
);

const StyledCodeSpan = ({ children }) => (
  <CodeSpan
    style={{
      paddingTop: 18,
      minWidth: '240px',
      fontSize: 38,
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
        ['[]', 'brackets', 'md'],
        ['Array', 'constructor', 'sm'],
        ['Array.of', 'of', 'md'],
        ['Spread', 'spread', 'sm']
      ].map(([text, id, size], ix) => (
        <ListItem style={flexStyle}>
          <StyledCodeSpan>{text}</StyledCodeSpan>
          <SlideCodePane playground={false} size={size}>
            {code[id]}
          </SlideCodePane>
        </ListItem>
      ))}
      <ListItem style={{ ...flexStyle, marginBottom: 0 }}>
        <StyledCodeSpan>Array.from</StyledCodeSpan>
        <div>
          <SlideCodePane playground={false}>{code.from.text}</SlideCodePane>
          <SlideCodePane size="sm" playground={false}>
            {code.from.seq}
          </SlideCodePane>
          <SlideCodePane size="sm" playground={false}>
            {code.from.nodes}
          </SlideCodePane>
        </div>
      </ListItem>
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
