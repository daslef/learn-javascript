import { useState } from 'react';
import { Text, FlexBox } from '@repo/spectacle';
import { SlideCodePane } from './index';

const TabContent = ({ text, syntax, example, notes = null }) => (
  <>
    {text && (
      <Text
        fontSize={28}
        fontWeight="bold"
        style={{ marginTop: 0, marginBottom: 0, marginLeft: 20 }}
      >
        {text}
      </Text>
    )}
    {syntax && (
      <SlideCodePane playground={false} showLineNumbers={false}>
        {syntax}
      </SlideCodePane>
    )}
    {example && (
      <SlideCodePane showLineNumbers={false} size="sm">
        {example}
      </SlideCodePane>
    )}
    {notes && (
      <Text fontSize={20} style={{ marginTop: 0, marginBottom: 0 }}>
        {notes}
      </Text>
    )}
  </>
);

const tabsContent = ({ tabNames, data }) =>
  tabNames.reduce(
    (obj, el) => ({
      ...obj,
      [el]: (
        <TabContent
          text={data[el]?.text}
          syntax={data[el]?.syntax}
          notes={data[el]?.notes}
          example={data[el]?.example}
        />
      )
    }),
    {}
  );

const SimpleTab = ({ tabName, currentTab, setCurrentTab, ix }) => (
  <FlexBox
    height={tabName === currentTab ? 75 : 50}
    mr={20}
    backgroundColor={
      tabName === currentTab ? 'rgba(45,45,45,0.6)' : 'rgba(0,0,0,0.2)'
    }
    key={`el${ix}`}
    onClick={() => setCurrentTab(tabName)}
    style={{ cursor: 'pointer', flexGrow: 1 }}
  >
    <Text
      fontWeight={tabName === currentTab ? 'bold' : '400'}
      fontSize={tabName === currentTab ? 30 : 20}
      textAlign="center"
    >
      {tabName}
    </Text>
  </FlexBox>
);

export const SimpleTabs = ({ tabNames = [], data, content = {} }) => {
  const [currentTab, setCurrentTab] = useState(tabNames[0]);
  return (
    <FlexBox
      flexDirection="column"
      alignItems="start"
      width={1}
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgba(100,100,100,0.1)'
      }}
    >
      <FlexBox alignItems="start" pl={30} mb={10}>
        {tabNames.map((tabName, ix) => (
          <SimpleTab
            tabName={tabName}
            ix={ix}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        ))}
      </FlexBox>
      {data ? tabsContent({ data, tabNames })[currentTab] : content[currentTab]}
    </FlexBox>
  );
};
