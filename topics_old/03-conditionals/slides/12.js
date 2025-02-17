import { Text, Notes, Appear, CodeSpan } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideContent = () => (
  <>
    <Text fontSize={34} style={{ marginBottom: 0 }}>
      Третий способ реализовать ветвление - использовать обычные{' '}
      <CodeSpan fontSize={26}>object</CodeSpan>, где ключами будут условия для
      переменной, а значениями - блоки кода
    </Text>
    <SlideCodePane playground={false} size="sm">
      {`const fontVariants = {
  'serif': 'Trebuchet',
  'sans-serif': 'Arial',
  'monospace': 'Roboto Mono'
}

const userChoice = prompt('Выберите тип шрифта: ')
const font = fontVariants[userChoice]

console.log(\`Выбран шрифт \${font} \`)
`}
    </SlideCodePane>
  </>
);

export const Slide12 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Объектные литералы"
    SlideNotes={() => <Notes>Обсудить ограничения этого подхода</Notes>}
    SlideContent={SlideContent}
  />
);
