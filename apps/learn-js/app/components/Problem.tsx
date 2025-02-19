import { FlexBox, Heading } from '@repo/spectacle';

const StyledText = ({ text, fontSize, codeSize, style }) => {
  const styledText = text
    .replaceAll('{%', `<code style="font-size: ${codeSize}px">`)
    .replaceAll('%}', '</code>');

  return (
    <p
      style={{
        fontFamily: `"Poiret One","Open Sans Condensed",Helvetica,Arial,sans-serif`,
        fontSize: `${fontSize}px`,
        paddingRight: '12px',
        ...style
      }}
      dangerouslySetInnerHTML={{ __html: styledText }}
    />
  );
};

export const Problem = ({
  headingText,
  mainText,
  tipText = null,
  Footer = null,
  headingSize = 34,
  mainTextSize = 32,
  codeSize = 26,
  tipTextSize = 28
}) => (
  <>
    <FlexBox
      width="100%"
      alignItems="start"
      backgroundColor="rgba(100,100,100,0.1)"
      borderRadius="30px"
    >
      <Heading fontSize={40}>Задача</Heading>
      <div>
        <StyledText
          text={headingText}
          fontSize={headingSize}
          codeSize={codeSize}
          style={{
            fontWeight: 'bold',
            marginTop: '40px'
          }}
        />
        <StyledText
          text={mainText}
          fontSize={mainTextSize}
          codeSize={codeSize}
          style={{
            lineHeight: `${mainTextSize * 1.3}px`
          }}
        />
        {tipText ? (
          <StyledText
            text={tipText}
            fontSize={tipTextSize}
            style={{ marginTop: 0 }}
          />
        ) : null}
      </div>
    </FlexBox>
    <FlexBox>
      <Footer />
    </FlexBox>
  </>
);
