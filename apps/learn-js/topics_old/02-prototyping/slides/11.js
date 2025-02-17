import { Fragment } from 'react';
import { Grid, Text, Notes, CodeSpan } from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Рассказать историю этих последовательностей, привести примеры использования
  </Notes>
);

const tableData = [
  ['\\n', 'Перевод строки'],
  ['\\t', 'Табуляция'],
  [`\\' и \\"`, 'Кавычки'],
  ['\\', 'Обратный слэш'],
  ['\\xXX', 'Символ с шестнадцатиричным юникодом XX'],
  ['\\uXXXX', 'Символ в UTF-16 с шестнадцатеричным кодом XXXX'],
  [
    '\\u{X...XXXX}',
    'Символ в UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF'
  ]
];

const SlideContent = () => (
  <>
    <Text fontSize={34}>
      Все спецсимволы начинаются с «символа экранирования» — обратного слеша{' '}
      <CodeSpan fontSize={28}>\</CodeSpan>. На данный момент активно
      используются следующие:
    </Text>
    <Grid gridTemplateRows="repeat(6, 40px)" gridTemplateColumns="200px 1fr">
      {tableData.map((row, ix) => (
        <Fragment key={`row_${ix}`}>
          <Text fontSize={26} fontWeight="bold">
            {row[0]}
          </Text>
          <Text fontSize={26}> {row[1]}</Text>
        </Fragment>
      ))}
    </Grid>
  </>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Escape-последовательности"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
