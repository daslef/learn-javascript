import { CodeSpan, FlexBox, Heading, Text, Appear } from 'spectacle';

import { DeckSlide } from '../../../components';

/*
Имя переменной – одно слово
Могут использоваться только буквы, цифры, символ _ 
Имя переменной не может начинаться с цифры

Желательно, чтобы имя переменной отражало ее смысл!


Можно
balance
current_balance
_spam
SPAM
account4

Нельзя
current-balance
current balance
4account
total_$um
‘hello’

*/

// const SlideContent = () => (
//   <FlexBox flexDirection="column" width={0.9} alignItems="start">
//     <Heading
//       textAlign="left"
//       lineHeight="54px"
//       fontSize={44}
//       style={{ marginBottom: 0 }}
//     >
//       Для интерпретации нужен движок и среда выполнения.
//     </Heading>
//     <Text
//       fontSize={26}
//       lineHeight="44px"
//       style={{ marginTop: 0, marginBottom: 0 }}
//     >
//       Движок отвечает за интерпретацию кода. Так как JS создавался для
//       браузеров, популярные движки - браузерные (например,{' '}
//       <CodeSpan fontSize={20}>V8</CodeSpan> в Chrome,{' '}
//       <CodeSpan fontSize={20}>SpiderMonkey</CodeSpan> в Firefox,{' '}
//       <CodeSpan fontSize={20}>Chakra</CodeSpan> в Edge).
//     </Text>
//     <Text
//       fontSize={26}
//       lineHeight="44px"
//       style={{ marginTop: -10, marginBottom: 0 }}
//     >
//       Интерпретированный код должен где-то запускаться - это называется средой
//       выполнения. Изначально такой средой был{' '}
//       <CodeSpan fontSize={20}>браузер</CodeSpan>, но теперь есть аналоги -
//       например, <CodeSpan fontSize={20}>Node.js</CodeSpan> и{' '}
//       <CodeSpan fontSize={20}>Deno</CodeSpan>.
//     </Text>
//     <Text
//       fontSize={18}
//       lineHeight="34px"
//       style={{ marginTop: -10, marginBottom: 0 }}
//     >
//       В нашем проекте используются две среды - браузер (клиентская среда) и
//       Node.js на сервере (например, в облаке CodeSandBox). Основы языка для
//       обеих сред одинаковы, а отличия для нас будут в выражаться в
//       дополнительных возможностях. Например, в браузере мы познакомимся с
//       различными <CodeSpan fontSize={16}>Web API</CodeSpan>, а в Node.Js -
//       поработаем с файловой системой и пакетами{' '}
//       <CodeSpan fontSize={16}>npm</CodeSpan>.
//     </Text>
//   </FlexBox>
// );

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    backgroundColor="#1e1e2e"
    subheading="Переменные"
    SlideContent={SlideContent}
    SlideNotes={() => null}
  />
);
