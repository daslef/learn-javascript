// import { CodeSpan, FlexBox, Heading, Text, Appear } from 'spectacle';

// import { DeckSlide } from '../../../components';
// import yodaSad from '../assets/yoda-sad.jpg';

// const SlideContent = () => (
//   <FlexBox flexDirection="column" alignItems="start" padding={4}>
//     <Heading fontSize={36} style={{ marginBottom: 0 }}>
//       Для интерпретации нужен движок и среда выполнения.
//     </Heading>
//     <Text lineHeight="40px" style={{ marginTop: 0, marginBottom: 0 }}>
//       Движок отвечает за интерпретацию кода. Так как JS создавался для
//       браузеров, популярные движки - браузерные (например,{' '}
//       <CodeSpan fontSize={22}>V8</CodeSpan> в Chrome,{' '}
//       <CodeSpan fontSize={22}>SpiderMonkey</CodeSpan> в Firefox,{' '}
//       <CodeSpan fontSize={22}>Chakra</CodeSpan> в Edge).
//     </Text>
//     <Text lineHeight="40px" style={{ marginTop: -10, marginBottom: 0 }}>
//       Интерпретированный код должен где-то запускаться - это называется средой
//       выполнения. Изначально такой средой был{' '}
//       <CodeSpan fontSize={22}>браузер</CodeSpan>, но теперь есть аналоги -
//       например, <CodeSpan fontSize={22}>Node.js</CodeSpan> и{' '}
//       <CodeSpan fontSize={22}>Deno</CodeSpan>.
//     </Text>
//     <Text
//       fontSize={16}
//       lineHeight="24px"
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

// export const Slide05 = ({ ...meta }) => (
//   <DeckSlide
//     {...meta}
//     backgroundColor="#1e1e2e"
//     subheading="Рантайм"
//     SlideContent={SlideContent}
//     SlideNotes={() => null}
//   />
// );
