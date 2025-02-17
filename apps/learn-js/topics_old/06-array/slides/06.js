import { Text, Notes, CodeSpan, UnorderedList, ListItem } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const code = `
  let sensorData = [[8, 81.702], null, NaN, [4, 12.14], NaN]
  console.log(sensorData[2], sensorData[100]) // ? ?
  console.log(sensorData[sensorData.length-1]) // ?
  console.log(sensorData.at(-2).at(0) // ?
  `;

const SlideContent = () => (
  <>
    <Text fontSize={34} style={{ marginTop: -20 }}>
      <CodeSpan fontSize={30}>Индексация</CodeSpan> - обращение к элементам
      массива по их порядковому номеру, производится через{' '}
      <CodeSpan fontSize={30}>[]</CodeSpan> либо методом{' '}
      <CodeSpan fontSize={30}>at</CodeSpan>
    </Text>
    <SlideCodePane>{code}</SlideCodePane>
    <UnorderedList style={{ marginTop: 0, marginBottom: 0 }}>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        обращение к индексу, большему чем{' '}
        <CodeSpan fontSize={24}>длина массива - 1</CodeSpan> вернет{' '}
        <CodeSpan fontSize={24}>undefined</CodeSpan>
      </ListItem>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        методом <CodeSpan fontSize={24}>at</CodeSpan> удобно считать индекс с
        конца массива
      </ListItem>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        обращение ко дважды вложенному элементу может выглядеть как{' '}
        <CodeSpan fontSize={24}>[][]</CodeSpan>
      </ListItem>
    </UnorderedList>
  </>
);

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Индексация"
    SlideNotes={() => (
      <Notes>Теперь научимся обращаться к элементам массива</Notes>
    )}
    SlideContent={SlideContent}
  />
);
