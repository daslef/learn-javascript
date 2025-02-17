import { Text, Notes, CodeSpan, UnorderedList, ListItem } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const code = `
  let sensorData = [[8, 81.702], null, NaN, [4, 12.14], NaN]
  console.log(sensorData[0][1], sensorData[2], sensorData[100])
  console.log(sensorData[sensorData.length-1])
  console.log(sensorData.at(-1))
  `;

const SlideContent = () => (
  <>
    <Text fontSize={40} style={{ marginTop: -20, marginBottom: 0 }}>
      Обратившись к элементу массива по индексу, его значение можно
      переопределить
    </Text>
    <SlideCodePane>{code}</SlideCodePane>
    <UnorderedList style={{ marginBottom: 0 }}>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        если индекс, по которому обращаемся, не существует в массиве, то задав
        ему значение, мы создадим новый элемент. Однако, это не рекомендуется
      </ListItem>
      <ListItem fontSize={28} style={{ padding: 0 }}>
        в качестве нового значения можно передать любой примитив или объект
        любого типа
      </ListItem>
    </UnorderedList>
  </>
);

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Изменение элемента"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
