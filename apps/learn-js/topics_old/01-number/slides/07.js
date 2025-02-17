import { Text, CodeSpan, UnorderedList, ListItem } from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideContent = () => (
  <>
    <Text style={{ marginBottom: -20 }}>
      К типу <CodeSpan fontSize={36}>number</CodeSpan> относятся три специальных
      значения:
    </Text>
    <UnorderedList>
      <ListItem>
        <CodeSpan fontSize={36} mr={20}>
          Infinity
        </CodeSpan>{' '}
        - бесконечность. Возникает, например, при делении на{' '}
        <CodeSpan fontSize={36} mr={20}>
          0
        </CodeSpan>
        или указании значений больше допустимого
      </ListItem>
      <ListItem>
        <CodeSpan fontSize={36} mr={20}>
          -Infinity
        </CodeSpan>
        - минус бесконечность, аналогично
      </ListItem>
      <ListItem>
        <CodeSpan fontSize={36} mr={20}>
          NaN
        </CodeSpan>{' '}
        - "не число". Возникает при ошибке преобразования в число, при ошибочной
        или неопределенной математической операции, взаимодействии с другим{' '}
        <CodeSpan fontSize={36} mr={20}>
          NaN
        </CodeSpan>{' '}
      </ListItem>
    </UnorderedList>
  </>
);

export const Slide07 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Специальные значения"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
