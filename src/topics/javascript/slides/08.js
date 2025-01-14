import { CodeSpan, FlexBox, Heading, Text, Appear } from 'spectacle';

import { DeckSlide } from '../../../components';

/*
В программировании слово переменная обозначает именованное место для хранения данных, например чисел, текста, списков с числами или символами и так далее. Также переменную можно рассматривать как ярлык, которым помечены некие данные
Переменные — это удобный способ хранения данных в программе, они пригодятся нам для решения самых разных задач
Чтобы создать переменную, нужно указать имя переменной, поставить знак = и ввести соответствующие данные. Создадим переменную S, указав, что ей соответствует значение 100 
Чтобы напечатать значение нашей переменной, используйте команду print, указав в скобках имя переменной
Можно изменить значение переменной — сделать так, чтобы ей соответствовали другие данные
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

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    backgroundColor="#1e1e2e"
    subheading="Переменные"
    SlideContent={SlideContent}
    SlideNotes={() => null}
  />
);
