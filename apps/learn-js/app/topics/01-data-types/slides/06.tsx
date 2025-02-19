/* TODO
 ** Написать код без объектов
 ** Сравнить код с объектами и без
 ** Учащиеся делают выводы, после этого - слайд с итогами
 ** Показать, что свойства объекта - по сути те же переменные, но другого скоупа
 **
 ** Сделать слайд по этой статье https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
 ** Завершить вопросами / задачами / чем покруче
 */

import { useEffect, useState } from 'react';
import {
  FlexBox,
  UnorderedList,
  Text,
  Notes,
  ListItem,
  CodeSpan
} from '@repo/spectacle';

import { DeckSlide, SlideCodePane } from '../../../components';

import ArrowSvg from '../../../assets/svg/arrow.svg?react';

const SlideNotes = () => (
  <Notes>
    ...
    <ol>
      <li></li>
      <li></li>
    </ol>
    ...
  </Notes>
);

const ArrowIcon = ({ step, setStep }) => (
  <ArrowSvg
    width="100px"
    style={{ marginLeft: '40px', cursor: 'pointer', flex: '0 0 100px' }}
    onClick={() => setStep(step + 1)}
  />
);

const SlideStep1 = ({ step, setStep }) => (
  <FlexBox
    justifyContent="space-between"
    width="100%"
    alignItems="center"
    height="100%"
  >
    <div>
      <Text>Представим программу учета сотрудников. Требования:</Text>
      <UnorderedList style={{ marginTop: 0 }}>
        <ListItem fontSize={38}>
          хранить информацию:
          <UnorderedList>
            <ListItem fontSize={30}>имя</ListItem>
            <ListItem fontSize={30}>адрес</ListItem>
            <ListItem fontSize={30}>id в базе данных</ListItem>
          </UnorderedList>{' '}
        </ListItem>
        <ListItem fontSize={38}>
          запрашивать информацию о зарплате у внешнего сервиса
        </ListItem>
        <ListItem fontSize={38}>
          рассчитана на компанию из 20-50 сотрудников
        </ListItem>
      </UnorderedList>
    </div>
    <ArrowIcon step={step} setStep={setStep} />
  </FlexBox>
);

const SlideStep2 = ({ step, setStep }) => (
  <FlexBox
    justifyContent="space-between"
    width="100%"
    alignItems="center"
    height="100%"
  >
    <Text>
      Мы можем спроектировать объект <CodeSpan>сотрудник</CodeSpan> и упаковать
      в этот объект всю информацию о нем (адрес, имя, паспортные данные) и даже
      спрограммировать запрос к базе данных о его зарплате. Это логично и
      удобно, если представить, что сотрудников могут быть десятки и сотни
    </Text>
    <ArrowIcon step={step} setStep={setStep} />
  </FlexBox>
);

const SlideStep3 = ({ step, setStep }) => (
  <FlexBox
    justifyContent="space-between"
    width="100%"
    alignItems="center"
    height="100%"
  >
    <SlideCodePane showLineNumbers={false}>{`     
        const person = {
          id = 782,
          name = 'Petr Ivanov',
          address = {
            building: '42',
            street: '1st Yamskaya st.',
          }
          getSalary = () => fetch(...).then(...).catch(...)
        }
      `}</SlideCodePane>
    <ArrowIcon step={step} setStep={setStep} />
  </FlexBox>
);

const SlideStep4 = ({ step, setStep }) => (
  <FlexBox justifyContent="space-between" width="100%" alignItems="center">
    <SlideCodePane showLineNumbers={false} size="sm">{`     
        const person = {
          id = 782,
          "person-name" = 'Petr Ivanov',
          address = {
            building: '42',
            street: '1st Yamskaya st.',
          }
          getSalary = () => fetch(...).then(...).catch(...)
        }
      `}</SlideCodePane>
    <ArrowIcon step={step} setStep={setStep} />
  </FlexBox>
);

const SlideStep5 = () => <></>;

const SlideContent = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    return () => setStep(1);
  }, [setStep]);

  const slideSteps = {
    1: <SlideStep1 step={1} setStep={setStep} />,
    2: <SlideStep2 step={2} setStep={setStep} />,
    3: <SlideStep3 step={3} setStep={setStep} />
  };

  return slideSteps[step];
};

export const Slide06 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Объекты"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
