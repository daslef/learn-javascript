import { Heading } from 'spectacle';
import { DeckSlide, SlideCodePane, Problem } from '../../../components';

const Footer = () => (
  <>
    <Heading
      fontSize={38}
      style={{ background: 'white', padding: '6px 10px', marginTop: 32 }}
    >
      Решить задачу в процедурном стиле и через функциональный подход
    </Heading>
    <SlideCodePane showLineNumbers={false}>{`// Решить`}</SlideCodePane>
  </>
);

const SlideContent = () => (
  <Problem
    headingText="Проектный кейс: Регистрация пользователя в приложении"
    headingSize={34}
    mainText={`Предобработать и валидизировать поле {%email%}, проверить
          совпадение полей {%password%} и {%confirmPassword%} и валидизировать их, 
          и вернуть объект вида {%{ "email": email, "password": hash(password) }%}`}
    mainTextSize={32}
    codeSize={24}
    tipTextSize={28}
    tipText={`Ввод данных реализовать функцией <CodeSpan fontSize={22}>prompt</CodeSpan>`}
    Footer={Footer}
  />
);

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="👨‍💻"
    SlideNotes={null}
    SlideContent={SlideContent}
  />
);
