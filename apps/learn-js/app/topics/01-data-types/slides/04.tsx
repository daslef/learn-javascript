import { UnorderedList, Text, ListItem, CodeSpan, CodePane } from 'spectacle';

import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

import { DeckSlide, SimpleTabs } from '../../../components';

const BooleanDescription = () => (
  <>
    <Text>
      Логический тип, имеет два значения: <CodeSpan>true</CodeSpan> и{' '}
      <CodeSpan>false</CodeSpan>
    </Text>
    <CodePane
      theme={tomorrow}
      language="javascript"
    // style={{ padding: '8px 16px', margin: '8px 16px' }}
    >
      {`
      let inProgress = true;
      let completed = false;

      console.log(typeof completed); // boolean
      `}
    </CodePane>
  </>
);

const NumberDescription = () => (
  <>
    <Text fontSize={42}>
      Численный тип, используется для целых чисел{' '}
      <CodeSpan fontSize={36}>42</CodeSpan>, чисел с плавающей точкой{' '}
      <CodeSpan fontSize={36}>5.72</CodeSpan> и специального значения{' '}
      <CodeSpan fontSize={36}>NaN</CodeSpan>
    </Text>
    <CodePane
      theme={tomorrow}
      language="javascript"
    // style={{ padding: '8px 16px', margin: '8px 16px' }}
    // className="sm"
    >{`
    let num = 100;
    const discount = 12.5; 
    const price = 200.00; // 200 to use twice less memory
    const x = 'a'/2; // NaN;
    `}</CodePane>
  </>
);

const StringDescription = () => (
  <>
    <CodePane
      theme={tomorrow}
      language="javascript"
    // style={{ padding: '0px 16px 0 16px', margin: '0px 0 0 16px' }}
    // className="sm"
    >{`
    const lang = 'JavaScript';
    console.log('I speak' + lang) // ?
    `}</CodePane>

    <UnorderedList>
      <ListItem fontSize={40}>
        тип "строка" служит для отображения текстовых данных
      </ListItem>
      <ListItem fontSize={40}>
        последовательность из нуля или более символов
      </ListItem>
      <ListItem fontSize={40}>
        заключена в одинарные <CodeSpan>''</CodeSpan> или двойные{' '}
        <CodeSpan>""</CodeSpan> кавычки
      </ListItem>
      <ListItem fontSize={40}>
        каждый символ представлен 2-байтовым целым числом
      </ListItem>
    </UnorderedList>
  </>
);

const NullDescription = () => (
  <>
    <Text>Служит для обозначения отсутствия значения.</Text>
    <CodePane
      theme={tomorrow}
      language="javascript"
    // style={{ padding: '8px 16px 0 16px', margin: '8px 0 0 16px' }}
    >{`
    let serverResponse = null;
    console.log(typeof serverResponse) // null
    `}</CodePane>
    <Text>
      Например, <CodeSpan>null</CodeSpan> можно использовать, если не пришли
      данные с датчика или иного внешнего источника данных
    </Text>
  </>
);

const UndefinedDescription = () => (
  <>
    <Text>
      Тип <CodeSpan>undefined</CodeSpan> используется в случаях, когда
      переменная объявлена, но не инициализирована
    </Text>
    <CodePane
      theme={tomorrow}
      language="javascript"
    // style={{ padding: '8px 16px 0 16px', margin: '8px 0 0 16px' }}
    >{`
    let x;
    console.log(x);        // undefined
    console.log(typeof x); // undefined
    console.log(typeof y); // undefined
    `}</CodePane>
  </>
);

const BigintDescription = () => (
  <UnorderedList>
    <ListItem fontSize={44}>
      тип <CodeSpan fontSize={36}>BigInt</CodeSpan> служит для работы с целыми
      числами, большими чем{' '}
      <CodeSpan fontSize={36}>2&#x2075;&#xb3; – 1</CodeSpan>
    </ListItem>
    <ListItem fontSize={44}>
      для использования этого типа к целому числу добавляется литерал{' '}
      <CodeSpan fontSize={36}>n</CodeSpan>, например{' '}
      <CodeSpan fontSize={36}>let x = 9029888888888n</CodeSpan>
    </ListItem>
    <ListItem fontSize={43}>
      математические операции между <CodeSpan fontSize={36}>BigInt</CodeSpan> и{' '}
      <CodeSpan fontSize={36}>number</CodeSpan> невозможны
    </ListItem>
  </UnorderedList>
);

const tabNames = [
  'Boolean',
  'Number',
  'String',
  'null',
  'undefined',
  'BigInt (es2020)'
];

const tabsContent = {
  Boolean: <BooleanDescription />,
  Number: <NumberDescription />,
  String: <StringDescription />,
  null: <NullDescription />,
  undefined: <UndefinedDescription />,
  'BigInt (es2020)': <BigintDescription />
};

export const Slide04 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Примитивы"
    SlideNotes={null}
    SlideContent={() => (
      <SimpleTabs tabNames={tabNames} tabsContent={tabsContent} />
    )}
  />
);
