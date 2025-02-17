import { Text, Notes, FlexBox, Box } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';

import { code } from './data';

const SlideNotes = () => (
  <Notes>
    <ul>
      <li>Вспомнить типы переменных</li>
      <li>Объяснить понятие области видимости</li>
      <li>Рассказать про недостатки процедур с сайд-эффектами</li>
      <li>Обсудить возможность улучшения представленных функций</li>
    </ul>
  </Notes>
);

const StyledText = ({ children }) => (
  <Text
    fontSize={29}
    fontWeight="bold"
    style={{ marginTop: 0, marginBottom: 0 }}
  >
    {children}
  </Text>
);

const SlideContent = () => (
  <>
    <FlexBox alignItems="start">
      <Box>
        <StyledText>
          Переменные, объявленные внутри функции, являются локальными - снаружи
          недоступны.
        </StyledText>
        <SlideCodePane playground={false} size="sm">
          {code.local}
        </SlideCodePane>
      </Box>
      <Box>
        <StyledText>
          У функции есть полный доступ к внешним переменным на чтение, а для
          комплексных типов - также на модификацию ("сайд-эффекты"), однако
          переопределение доступно только с модификаторами!
        </StyledText>
        <SlideCodePane playground={false} size="sm">
          {code.sideEffects}
        </SlideCodePane>
      </Box>
    </FlexBox>
  </>
);

export const Slide08 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Скоуп"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
