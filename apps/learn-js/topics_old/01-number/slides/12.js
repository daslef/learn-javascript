import { FlexBox, Text, Notes } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

const SlideNotes = () => <Notes></Notes>;

const codeRandom = `
    // дополнить код
    const bound = prompt('Введите границу: ')
    const answer = Math.random()
    console.log(answer)
  `;

const codeConvert = `
    const value = prompt('Значение (в градусах): ')
    // const answer = ?
    console.log(answer)
  `;

const SlideContent = () => {
  return (
    <>
      <FlexBox width={1} alignItems="start">
        <Text fontSize={32} fontWeight="bold">
          Рандомное целое число от нуля до заданной границы
        </Text>
        <FlexBox height="100%" width={1}>
          <SlideCodePane showLineNumbers={false}>{codeRandom}</SlideCodePane>
        </FlexBox>
      </FlexBox>
      <FlexBox width={1} alignItems="start">
        <Text fontSize={32} fontWeight="bold">
          Перевести из градусов в радианы и округлить до двух знаков [rad = deg
          * π / 180]
        </Text>
        <FlexBox height="100%" width={1}>
          <SlideCodePane showLineNumbers={false}>{codeConvert}</SlideCodePane>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export const Slide12 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Задача"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
