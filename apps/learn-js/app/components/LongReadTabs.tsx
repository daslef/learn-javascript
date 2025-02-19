import { Text, FlexBox } from '@repo/spectacle';
import { SlideCodePane } from './index';

const P = ({ children, ...props }) => (
  <Text fontSize={28} style={{ marginBottom: 0, marginTop: 0 }} {...props}>
    {children}
  </Text>
);

const Content = ({ data, current }) => (
  <div
    style={{
      backgroundColor: 'rgba(255,255,255,0.1)',
      marginLeft: '16px',
      overflowY: 'auto',
      width: '98%' // не протестил на старых колодах
    }}
  >
    <P>{data[current].text}</P>
    {data[current].syntax && (
      <FlexBox alignItems="start" justifyContent="start">
        <P style={{ borderBottom: '2px solid white' }}>Синтаксис</P>
        <SlideCodePane showLineNumbers={false} playground={false} size="sm">
          {data[current].syntax}
        </SlideCodePane>
      </FlexBox>
    )}
    {data[current].example && (
      <FlexBox alignItems="start" justifyContent="start" pb={20}>
        <P style={{ borderBottom: '2px solid white' }}>Например</P>
        <SlideCodePane showLineNumbers={false} playground={false} size="sm">
          {data[current].example}
        </SlideCodePane>
      </FlexBox>
    )}
  </div>
);

const Tabs = ({ tabNames, current, setCurrent }) => {
  const Tab = ({ el, ix, current, setCurrent }) => (
    <Text
      fontSize={30}
      fontWeight="bold"
      style={{
        marginBottom: 0,
        cursor: 'pointer',
        flexGrow: ix === 2 ? 1 : 0
      }}
      key={`tab_${ix}`}
      backgroundColor={ix === current ? 'rgba(255,255,255,0.1)' : 'initial'}
      onClick={() => setCurrent(ix)}
    >
      {el}
    </Text>
  );

  return (
    <FlexBox>
      {tabNames.map((el, ix) => (
        <Tab el={el} ix={ix} current={current} setCurrent={setCurrent} />
      ))}
    </FlexBox>
  );
};

export const LongReadTabs = ({ data, tabNames, current, setCurrent }) => (
  <>
    <Tabs current={current} setCurrent={setCurrent} tabNames={tabNames} />
    <Content data={data} current={current} />
  </>
);
