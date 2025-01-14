import { FlexBox, Notes } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => <Notes></Notes>;

const code = `
    const name = 'Лена'
    const lang = 'JavaScript'
    const months = 2

    // Можно подставлять переменные
    console.log(\`Я \${name}. Изучаю \${lang} уже \${months} месяца.\`) 

    // А можно выполнять целые выражения
    const fruits = ['яблоки', 'груши', 'лимоны']
    console.log(\`Я люблю фрукты: \${fruits.join(', ')}\`)
  `;

const SlideContent = () => (
  <FlexBox height="100%" width={1}>
    <SlideCodePane showLineNumbers={false}>{code}</SlideCodePane>
  </FlexBox>
);

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Шаблонные строки"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
