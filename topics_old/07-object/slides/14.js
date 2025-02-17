import { FlexBox, Text, CodeSpan, Image } from 'spectacle';

import { DeckSlide, Tip } from '../../../components';
import img from '../assets/property.png';

const textFontSize = 26;
const codeFontSize = 20;
const lineHeight = '40px';

const SlideContent = () => (
  <>
    <Text
      fontSize={textFontSize}
      style={{ marginTop: 0, marginBottom: 0, lineHeight }}
    >
      Так как <CodeSpan fontSize={codeFontSize}>object</CodeSpan> - изменяемый
      тип, по ошибке можно изменить важные свойства. Чтобы защитить свойства от
      изменения, есть готовые методы{' '}
      <Tip content="замораживает объект (поверхностно)">
        <CodeSpan fontSize={codeFontSize}>Object.freeze()</CodeSpan>
      </Tip>
      ,{' '}
      <Tip content="разрешает только менять значения существующих свойств">
        <CodeSpan fontSize={codeFontSize}>Object.seal()</CodeSpan>
      </Tip>{' '}
      и{' '}
      <Tip content="запрещает добавление новых свойств">
        <CodeSpan fontSize={codeFontSize}>Object.preventExtensions()</CodeSpan>
      </Tip>
      . Для проверки, заморожен ли объект, есть метод{' '}
      <Tip content="возвращает true либо false">
        <CodeSpan fontSize={codeFontSize}>Object.isFrozen()</CodeSpan>
      </Tip>
      .
    </Text>
    <FlexBox alignItems="start" style={{ height: '100%', marginLeft: 30 }}>
      <Image src={img} style={{ height: '45%', marginTop: 30 }} />
      <Text
        fontSize={textFontSize}
        style={{ marginTop: 0, marginBottom: 0, lineHeight }}
      >
        Чтобы разобраться, как работают эти методы, познакомимся с понятием{' '}
        <CodeSpan fontSize={codeFontSize}>дескриптора</CodeSpan>. Помимо ключа и
        значения в каждом свойстве содержатся настройки{' '}
        <Tip content="доступность для записи">
          <CodeSpan fontSize={codeFontSize}>writable</CodeSpan>
        </Tip>
        ,{' '}
        <Tip content="видимость при перечислениях">
          <CodeSpan fontSize={codeFontSize}>enumerable</CodeSpan>
        </Tip>{' '}
        и{' '}
        <Tip content="доступность для настройки">
          <CodeSpan fontSize={codeFontSize}>configurable</CodeSpan>
        </Tip>
        . Чтобы узнать настройки свойств объекта{' '}
        <CodeSpan fontSize={codeFontSize}>obj</CodeSpan>, используем{' '}
        <Tip content="дескрипторы конкретного свойства">
          <CodeSpan fontSize={codeFontSize}>
            Object.getOwnPropertyDescriptor(obj, 'свойство')
          </CodeSpan>
        </Tip>{' '}
        либо{' '}
        <Tip content="дескрипторы всех свойств">
          <CodeSpan fontSize={codeFontSize}>
            Object.getOwnPropertyDescriptors(obj)
          </CodeSpan>
        </Tip>
      </Text>
    </FlexBox>
  </>
);

export const Slide14 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Дескрипторы"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
