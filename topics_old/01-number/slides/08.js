import { Text, Notes, CodeSpan } from 'spectacle';

import { DeckSlide, SlideCodePane, Tip } from '../../../components';

const SlideNotes = () => (
  <Notes>
    Почему это важно? Потому что если в коде возникнет специальное значение и мы
    не сделаем необходимые проверки, логика приложения может сломаться{' '}
  </Notes>
);

const code = `
  const userInput = prompt('Введите число: ')
  const userNumber = Number(userInput)

  console.log(Number.isNaN(userNumber))
  console.log(Number.isFinite(userNumber))
  `;

const SlideContent = () => (
  <>
    <Text style={{ marginTop: 0 }} fontSize={39} lineHeight="50px">
      <CodeSpan fontSize={32}>NaN</CodeSpan> не равен самому себе, поэтому его
      нельзя обнаружить проверкой <CodeSpan fontSize={34}>X === NaN</CodeSpan>.
      Вместо этого используем специальные методы языка:{' '}
      <Tip content={<span>является NaN</span>}>
        <span>
          <CodeSpan fontSize={32}>Number.isNaN(x),</CodeSpan>{' '}
          <CodeSpan fontSize={32}>Object.is(x, NaN)</CodeSpan>
        </span>
      </Tip>{' '}
      и{' '}
      <Tip content={<span>является "нормальным числом"</span>}>
        <CodeSpan fontSize={32}>Number.isFinite(x)</CodeSpan>
      </Tip>
    </Text>
    <SlideCodePane style={{ marginLeft: 28, marginTop: 26 }}>
      {code}
    </SlideCodePane>
  </>
);

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Специальные значения"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
