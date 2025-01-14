import { useState } from 'react';
import { Text, FlexBox } from 'spectacle';
import { SlideCodePane } from '../index';

import { StyledBox, StyledCategory, StyledHeading, StyledText } from './styled';

export const CategoryTabs = ({ categories, info, initialCode = '' }) => {
  const [current, setCurrent] = useState(Object.values(categories)[0][0]);

  const getText = (current) => info[current]['text'] || '';

  const getCode = (current) => {
    const currentCode = info[current]['code'] || '';
    const currentResult = info[current]['codeResult'] || '';
    return `${initialCode}\nconsole.log(${currentCode}) // ${currentResult}`;
  };

  const computeTextProps = (current) => ({
    fontSize: info[current]['text']?.length > 72 ? 26 : 36,
    height: info[current]['text']?.length > 72 ? 36 : 48
  });

  return (
    <FlexBox height="100%" width={1} flexDirection="column">
      <StyledBox>
        {Object.entries(categories).map(([key, value], ix) => (
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
        <SlideCodePane playground={false} style={{ width: 1300 }}>
          {getCode(current)}
        </SlideCodePane>
      </FlexBox>
    </FlexBox>
  );
};
