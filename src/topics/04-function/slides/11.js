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
        Есть специальные библиотеки и среды (Jest, Mocha, AVA), но пока будем
        использовать console.assert
      </li>
      <li></li>
    </ul>
  </Notes>
);

const code = `const sum = (x, y) => x + y

console.assert(sum(2,4) === 6)
console.assert(sum(-10,10) === 0, "Behave correctly on negative numbers")
console.assert(sum('a', 10) === null, "Returns null on incorrect data")
console.assert(sum(1) === null), "Returns null on incorrect variables quantity")
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
      Простейший тест можно написать используя метод{' '}
      <CodeSpan fontSize={30}>console.assert</CodeSpan>
    </Text>
    <SlideCodePane size="sm" playground={false}>
      {code}
    </SlideCodePane>
    <Text fontSize={34} style={{ marginBottom: 0, marginTop: 0 }}>
      Если один из <CodeSpan fontSize={30}>console.assert</CodeSpan> даст
      ошибку, программа упадет с ошибкой. Иначе - тесты прошли успешно!
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
