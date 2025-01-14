import { Notes, Text, UnorderedList, ListItem, CodeSpan } from 'spectacle';
import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Обсудить назначение тестирования, разницу между автотестами и ручным
    тестированием. Кратко упомянуть пирамиду тестирования.
    <ul>
      <li>Юнит-тесты создаются для тестирования небольших участков кода.</li>
      <li>
        Главная задача юнит-теста — проверить входные данные на соответствие
        ожидаемому результату работы.
      </li>
      <li>
        Юнит-тестирование обеспечивает стабильную работу каждой из частей
        программы.{' '}
      </li>
      <li>Очень желательно покрыть юнит-тестами весь код.</li>
      <li>
        Есть специальные библиотеки и среды (UnitTest, pytest и другие), но пока
        будем использовать assert
      </li>
      <li></li>
    </ul>
  </Notes>
);

const code = `sum = lambda x, y: x + y

assert sum(2,4) == 6
assert sum(-10,10) == 0, "Behave correctly on negative numbers"
assert sum('a', 10) == None, "Returns null on incorrect data"
assert sum(1) == None, "Returns null on incorrect variables quantity"
`;

const SlideContent = () => (
  <>
    <Text fontSize={34} style={{ marginBottom: 0 }}>
      Важно, чтобы функция корректно работала на любых входных данных. Можно
      тестировать все типовые случаи вручную, через консоль, но:
    </Text>
    <UnorderedList style={{ marginTop: 0, marginBottom: 0 }}>
      <ListItem fontSize={30}>
        случаев может быть много, можно о чем-то забыть, и это занимает ценное
        время
      </ListItem>
      <ListItem fontSize={30}>
        при каждом изменении функции или ее зависимостей процесс нужно будет
        повторять!
      </ListItem>
    </UnorderedList>
    <Text fontSize={34} style={{ marginBottom: 0, marginTop: 0 }}>
      <CodeSpan fontSize={32}>Юнит-тесты</CodeSpan> - это программы, которые
      проверяют работу небольшого участка кода (например, функции). Стоит один
      раз написать их, чтобы в дальнейшем экономить время и быть уверенным в ее
      работоспособности.
    </Text>
    <Text fontSize={34} style={{ marginBottom: 0, marginTop: 0 }}>
      Простейший тест можно написать используя оператор{' '}
      <CodeSpan fontSize={30}>assert</CodeSpan>
    </Text>
    <SlideCodePane size="sm" playground={false}>
      {code}
    </SlideCodePane>
    <Text fontSize={34} style={{ marginBottom: 0, marginTop: 0 }}>
      Если один из <CodeSpan fontSize={30}>assert</CodeSpan> даст ошибку,
      программа упадет с ошибкой. Иначе - тесты прошли успешно!
    </Text>
  </>
);

export const Slide11 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Unit-тестирование"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
