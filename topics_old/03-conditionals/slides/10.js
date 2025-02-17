import { FlexBox, Text, Heading, Notes } from 'spectacle';
import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => <Notes></Notes>;

const SlideContent = () => (
  <>
    <FlexBox
      width="100%"
      alignItems="start"
      backgroundColor="rgba(100,100,100,0.1)"
      borderRadius="30px"
    >
      <Heading fontSize={40}>Задача</Heading>
      <div>
        <Text fontSize={34} fontWeight="bold">
          Определить статус пользователя в зависимости от времени тренировок и
          набранных монет
        </Text>
        <Text fontSize={34}>
          Если он: провел в приложении больше <strong>500</strong> часов или
          набрал более <strong>8000</strong> монет - "гроссмейстер", провел
          более <strong>200</strong> часов или набрал больше{' '}
          <strong>6000</strong> монет - "опытный", более <strong>50</strong>{' '}
          часов или больше <strong>2000</strong> монет - "старательный",{' '}
          <strong>20 </strong>
          часов и больше <strong>500</strong> монет - "пионер", иначе -
          "новенький"
        </Text>
      </div>
    </FlexBox>
    <FlexBox>
      <Heading
        fontSize={38}
        style={{ background: 'white', padding: '6px 10px', marginTop: 32 }}
      >
        Этап 2. Решить задачу с использованием if / else
      </Heading>
      <SlideCodePane showLineNumbers={false}>{`// Решить`}</SlideCodePane>
    </FlexBox>
  </>
);

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="👨‍💻"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
