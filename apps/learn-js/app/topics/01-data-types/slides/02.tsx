import { FlexBox, Text, Heading, Notes } from '@repo/spectacle';
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
    <FlexBox mb="40px" width="100%">
      <Heading>Типы данных в JavaScript</Heading>
    </FlexBox>
    <FlexBox flexGrow={1} alignItems="start" width="100%">
      <FlexBox height="50%" backgroundColor="rgba(0,0,0,0.2)" mr="5%">
        <Text>Примитивы</Text>
      </FlexBox>
      <FlexBox height="50%" backgroundColor="rgba(0,0,0,0.2)" ml="5%">
        <Text>Объекты</Text>
      </FlexBox>
    </FlexBox>
  </>
);

export const Slide02 = ({ ...meta }) => (
  <DeckSlide {...meta} SlideNotes={SlideNotes} SlideContent={SlideContent} />
);
