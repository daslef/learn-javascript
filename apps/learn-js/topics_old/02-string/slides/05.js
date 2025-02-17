import { FlexBox, Text, Notes, CodeSpan } from 'spectacle';
import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Программирование - это во многом искусство работы с данными. Примеры:
    <ol>
      <li>Внести в систему данные о пассажире (с текстовыми данными)</li>
      <li>Принять решение о выдаче кредита (с текстовыми данными)</li>
      <li>Рассчитать площадь треугольника (с текстовыми данными)</li>
      <li>
        Очистить голосовое сообщение от окружающих шумов (со звуковыми данными)
      </li>
      <li>Применить фильтр к изображению (с графическими данными)</li>
      <li>Найти преступника по камерам наблюдения (с графическими данными)</li>
    </ol>
    Еще примеры от вас?
  </Notes>
);

const SlideContent = () => (
  <>
    <Text>
      Символы строки хранятся в виде одного и нескольких чисел - юнитов.
      Преобразование чисел в символы происходит через таблицу кодировки UTF-16
    </Text>
    <FlexBox mb="20px" width="100%">
      {[...'HELLO WORLD'].map((el, ix) => (
        <CodeSpan
          mr={10}
          px={40}
          lineHeight="60px"
          style={{ minHeight: 60, backgroundColor: 'salmon' }}
        >
          {el}
        </CodeSpan>
      ))}
    </FlexBox>
    <FlexBox mb="0px" width="100%">
      {[72, 69, 76, 76, 79, 32, 87, 79, 82, 76, 68].map((el, ix) => (
        <CodeSpan mr={10} px={33} fontSize={32}>
          {el}
        </CodeSpan>
      ))}
    </FlexBox>
    <Text fontSize={32}>
      Кодировка UTF-16 содержит в себе все современные алфавиты, включая
      иероглифы, эмодзи и даже шумерскую клинопись и славянскую буквицу!
    </Text>
  </>
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Внутреннее устройство"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
