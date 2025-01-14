import { FlexBox, Text, Notes, CodeSpan } from 'spectacle';

import { DeckSlide } from '../../../components';

const SlideNotes = () => (
  <Notes>Math - объект, содержащий статические методы и константы</Notes>
);

const Rose = ({ r = 180, items = [] }) => {
  const getCoords = () => {
    const segmentDegrees = 360 / items.length;
    const points = [];
    for (let i = 0; i < items.length; i++) {
      let rotation = segmentDegrees * i * 0.017453;
      points.push({ x: r * Math.cos(rotation), y: r * Math.sin(rotation) });
    }
    return points;
  };

  const coords = getCoords();

  return (
    <FlexBox width={1} height="100%">
      <FlexBox style={{ position: 'absolute' }}>Math</FlexBox>
      <ul
        style={{
          position: 'relative',
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {items.map((el, ix) => (
          <li
            key={`rose_${ix}`}
            style={{
              backgroundColor: el?.name ? 'rgba(255,255,20,0.5)' : 'darkgray',
              position: 'absolute',
              minWidth: '100px',
              minHeight: '100px',
              background: 'black',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              borderRadius: '50%',
              transform: `translate(${coords[ix].x}px, ${
                coords[ix].y + 180
              }px)`,
              zIndex: 100
            }}
          >
            <CodeSpan
              fontSize={18}
              fontWeight="bold"
              backgroundColor="transparent"
            >
              {' '}
              {typeof el === 'string' ? el : el?.name}
            </CodeSpan>
          </li>
        ))}
      </ul>
    </FlexBox>
  );
};

const SlideContent = () => (
  <>
    <Rose
      items={[
        'abs',
        { name: 'round', items: [''] },
        'sqrt',
        'exp',
        { name: 'log', items: [''] },
        { name: 'sin', items: [''] },
        { name: 'E', items: [] },
        'random'
      ]}
    />
  </>
);

export const Slide10 = ({ ...meta }) => (
  <DeckSlide
    {...meta}
    subheading="Math"
    SlideNotes={SlideNotes}
    SlideContent={SlideContent}
  />
);
