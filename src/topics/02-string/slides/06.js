import { Text, Notes, CodeSpan } from 'spectacle';
import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Для нас привычно, что длина строки - это количество символов в ней.
    Посмотрим, так ли это в JavaScript
  </Notes>
);

const codeBlocks = {
  simple: `const x = "Снег";\nconsole.log(x.length); // 4`,
  emoji: `const emoji1 = "👩‍❤️‍👩";\nconst emoji2 = "👩";\nconsole.log(emoji1.length, emoji2.length); // 8 и 2`,
  emojiArray: `const emoji = "👩‍❤️‍👩👩";\nconsole.log([...emoji].length); // 1`
};

const SlideContent = () => (
  <>
    <Text fontSize={36}>
      Для нахождения длины строки служит метод{' '}
      <CodeSpan fontSize={32}>length</CodeSpan>
    </Text>
    <SlideCodePane showLineNumbers={false}>{codeBlocks.simple}</SlideCodePane>
    <Text fontSize={28} style={{ marginBottom: 0 }}>
      Казалось бы, работает привычно - выводит количество символов. А теперь -
      эмодзи:
    </Text>
    <SlideCodePane showLineNumbers={false}>{codeBlocks.emoji}</SlideCodePane>
    <Text fontSize={28} style={{ marginBottom: 0 }}>
      Если в тексте могут быть эмодзи, для правильного подсчета символов есть
      хитрый способ, который станет понятен после знакомства с типом{' '}
      <CodeSpan fontSize={22}>Array</CodeSpan> и{' '}
      <CodeSpan fontSize={22}>деструктуризацией</CodeSpan>:
    </Text>
    <SlideCodePane showLineNumbers={false}>
      {codeBlocks.emojiArray}
    </SlideCodePane>
  </>
);

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Длина строки"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
