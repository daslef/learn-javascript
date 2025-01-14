import { Appear, FlexBox, Text } from 'spectacle';

import { DeckSlide, SlideCodePane } from '../../../../components';

import { code } from './data';

const SlideContent = () => (
  <>
    {['sumOfNumbers', 'triangleType'].map((el, ix) => {
      const dataObj = code[el];
      return (
        <Appear>
          <FlexBox
            alignItems="start"
            flexWrap="wrap"
            key={`example_${ix}`}
            width="95%"
            mb={20}
          >
            <Text
              style={{ flex: '1 0 100%', textAlign: 'center' }}
              fontWeight="bold"
              fontSize={44}
            >
              {ix + 1}. {dataObj.text}
            </Text>
            {['plain', 'procedure', 'functional'].map((codeType, ix) => (
              <Appear>
                <SlideCodePane
                  size={dataObj.paneSize}
                  playground={dataObj.interactive}
                  showLineNumbers={false}
                  key={`code_${codeType}_${ix}`}
                >
                  {dataObj[codeType]}
                </SlideCodePane>
              </Appear>
            ))}
          </FlexBox>
        </Appear>
      );
    })}
  </>
);

export const Slide03 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Введение"
    SlideContent={SlideContent}
    SlideNotes={null}
  />
);
