import { Heading } from 'spectacle';
import { DeckSlide, SlideCodePane, Problem } from '../../../components';

import { code } from './practice/step1';

const Footer = () => (
  <>
    <Heading
      fontSize={38}
      style={{
        background: 'white',
        padding: '6px 10px',
        marginTop: 32
      }}
    >
      Реализовать алгоритм для массива из первых трёх элементов
    </Heading>
    <span style={{ width: '76px', maxHeight: '70px', overflow: 'hidden' }}>
      <SlideCodePane>{code}</SlideCodePane>
    </span>
  </>
);

const SlideContent = () => (
  <Problem
    headingText="Проектный кейс: Выявить самые сложные вопросы в тесте"
    headingSize={34}
    mainText={`Дан массив элементов вида {%{ theme: 'типы данных', questions: 11, correctAnswers: 6, played: 4 }%}. Вывести сложные темы в виде "Ранг. Тема (процент)"`}
    mainTextSize={24}
    tipTextSize={20}
    tipText={`Cложные темы - те, средний процент правильных ответов на которые ниже {%50%%}. Округлите процент до 1 знака после запятой. Считать, что в вопросе 4 варианта ответа. Учитывайте, что в каждой игре принимали участие от 8 до 10 учеников :)`}
    Footer={Footer}
  />
);

export const Slide05 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="👨‍💻"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
