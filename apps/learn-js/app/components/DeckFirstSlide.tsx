import { Slide, Notes } from '@repo/spectacle';
import { BookOpen, Code } from 'react-feather';

export const DeckFirstSlide = ({ title, theory = [], practice = [] }) => (
  <Slide className="slide--first">
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '160px',
        height: '100%'
      }}
    >
      <h1
        style={{
          fontFamily: 'Jura',
          margin: '60px 0',
          fontSize: 120,
          fontWeight: 700
        }}
      >
        {title}
      </h1>
      {theory.map((el, ix) => (
        <p
          key={`theory${ix}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            fontFamily: 'Bellota',
            fontSize: 48,
            lineHeight: '82px'
          }}
        >
          <BookOpen size={48} style={{ marginRight: 24 }} />
          {el}
        </p>
      ))}

      {practice.map((el, ix) => (
        <p
          key={`practice${ix}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 0,
            fontFamily: 'Bellota',
            fontSize: 48,
            lineHeight: '82px'
          }}
        >
          <Code size={48} style={{ marginRight: 24 }} />
          {el}
        </p>
      ))}
    </div>
    <Notes>
      Пора добавить интерактивность нашему главному экрану! Для этого изучим
      основы JavaScript
    </Notes>
  </Slide>
);
