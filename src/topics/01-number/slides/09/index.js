import { useState } from 'react';
import { FlexBox, Text, Notes } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';
import { StyledBox, StyledCategory, StyledHeading, StyledText } from './styled';
import { info, slideData } from './data';

const SlideNotes = () => (
  <Notes>
    На прошлом слайде мы применяли методы Number.isNaN и Number.isFinite. Но как
    это возможно, если число - это примитив, и кроме значения в нем ничего нет?
  </Notes>
);

const SlideContent = () => {
  const [current, setCurrent] = useState('toString');

  const getText = (current) => info[current]['text'] || '';

  const getCode = (current) => {
    const currentCode = info[current]['code'] || '';
    const currentResult = info[current]['codeResult'] || '';
    const interpolated = `const x = 148.14\n${currentCode} // ${currentResult}`;
    return interpolated;
  };

  const computeTextProps = (current) => ({
    fontSize: info[current]['text']?.length > 72 ? 26 : 36,
    height: info[current]['text']?.length > 72 ? 36 : 48
  });

  return (
    <FlexBox height="100%" width={1} flexDirection="column">
      <StyledBox>
        {Object.entries(slideData).map(([key, value], ix) => (
          <StyledCategory key={ix}>
            <StyledHeading>{key}</StyledHeading>
            <FlexBox>
              {value.map((el, ix) => (
                <StyledText
                  key={ix}
                  active={current === el}
                  important={info[el]?.important}
                  setCurrent={setCurrent}
                >
                  {el}
                </StyledText>
              ))}
            </FlexBox>
          </StyledCategory>
        ))}
      </StyledBox>
      <FlexBox
        mt={30}
        width="1300px"
        backgroundColor="rgb(45, 45, 45)"
        justifyContent="start"
      >
        <Text {...computeTextProps(current)}>{getText(current)}</Text>
      </FlexBox>
      <FlexBox mt={30} flexGrow={1} backgroundColor="rgb(45, 45, 45)">
        <SlideCodePane
          playground={false}
          showLineNumbers={false}
          style={{ paddingLeft: '10px', width: 1300 }}
        >
          {getCode(current)}
        </SlideCodePane>
      </FlexBox>
    </FlexBox>
  );
};

export const Slide09 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Обёртка Number"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
