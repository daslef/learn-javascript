import { FlexBox, Heading, Text } from 'spectacle';

const StyledContent = ({
  content,
  lineHeight,
  codeFontSize,
  textFontSize
} = {}) => {
  const styledText = content
    .replaceAll(
      '{%',
      `<code style="font-size: ${codeFontSize}px; line-height: ${lineHeight};">`
    )
    .replaceAll('%}', '</code>');

  return (
    <div
      style={{ fontSize: textFontSize }}
      dangerouslySetInnerHTML={{ __html: styledText }}
    />
  );
};

export const SlideDefinition = ({
  content,
  quote = null,
  lineHeight = '74px',
  textFontSize = 52,
  codeFontSize = 44
}) => (
  <FlexBox flexDirection="column" height="100%">
    <Heading textAlign="left" lineHeight={lineHeight}>
      <StyledContent
        content={content}
        textFontSize={textFontSize}
        codeFontSize={codeFontSize}
        lineHeight={lineHeight}
      />
    </Heading>
    {quote && (
      <FlexBox width={1} justifyContent="end" marginRight={80}>
        <Text fontSize={32} fontWeight="bold">
          {quote}
        </Text>
      </FlexBox>
    )}
  </FlexBox>
);
