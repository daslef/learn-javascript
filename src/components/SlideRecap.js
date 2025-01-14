import { Text, ListItem, OrderedList, Appear } from 'spectacle';

const Question = ({ text, itemFontSize = 44, codeSpanFontSize = 32 } = {}) => {
  const styledText = text.replaceAll(
    '<code>',
    `<code style="font-size: ${codeSpanFontSize}px">`
  );

  return (
    <div
      style={{ fontSize: itemFontSize }}
      dangerouslySetInnerHTML={{ __html: styledText }}
    />
  );
};

export const SlideRecap = ({
  heading = 'Да или нет?',
  items = [],
  headingFontSize = 38,
  itemFontSize = 42,
  codeSpanFontSize = 34
} = {}) => (
  <>
    <Text
      fontWeight="bold"
      fontSize={headingFontSize}
      style={{ marginTop: 0, marginBottom: -10 }}
    >
      {heading}
    </Text>
    <OrderedList>
      {[...items].map((text, ix) => {
        const Item = () => (
          <ListItem fontSize={itemFontSize}>
            <Question
              text={text}
              itemFontSize={itemFontSize}
              codeSpanFontSize={codeSpanFontSize}
            />
          </ListItem>
        );

        return ix === 0 ? (
          <Item />
        ) : (
          <Appear key={`appear_${ix}`}>
            <Item />
          </Appear>
        );
      })}
    </OrderedList>
  </>
);
