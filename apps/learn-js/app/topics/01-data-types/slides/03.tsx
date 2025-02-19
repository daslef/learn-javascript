import {
  FlexBox,
  UnorderedList,
  Text,
  Notes,
  ListItem,
  Appear
} from '@repo/spectacle';
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
    <FlexBox flexGrow={0} alignItems="start" pl={40}>
      {[
        'Boolean',
        'Number',
        'String',
        'null',
        'undefined',
        'BigInt (es2020)',
        'Symbol (es2015)'
      ].map((text, ix) => (
        <FlexBox
          height={100}
          mr={20}
          backgroundColor="rgba(0,0,0,0.2)"
          key={`el${ix}`}
        >
          <Text fontSize={30} textAlign="center">
            {text}
          </Text>
        </FlexBox>
      ))}
    </FlexBox>

    <UnorderedList>
      {[
        'простейшие неизменяемые типы данных',
        'содержат только значение...',
        '...и копируются по значению',
        'размещаются в стеке',
        'нет проблем со сборкой мусора'
      ].map((text, ix) => (
        <Appear key={`ul${ix}`}>
          <ListItem fontSize={32}>{text}</ListItem>
        </Appear>
      ))}
    </UnorderedList>
  </>
);

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Примитивы"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
