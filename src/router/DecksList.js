import { useNavigate } from 'react-router-dom';
import { Share, Play, Activity } from 'react-feather';

import styles from './DecksList.module.css';
import { data } from './data';

const getDotColor = (cardType) =>
  cardType === 't'
    ? 'rgb(160, 160, 160)'
    : cardType === 'q'
    ? '#8f00ff'
    : '#03c04a';

const Tag = ({ text, color }) => (
  <span className={styles.Tag} style={{ backgroundColor: color }}>
    {text}
  </span>
);

const Deck = ({ title, length, handleClick, type, cardTypes = '', lesson }) => (
  <li className={type === 'basic' ? styles.Card : styles.CardPractice}>
    <section className={styles.Card_header}>
      <button className={styles.Button}>
        <Share size={24} />
      </button>
      {type === 'basic' && (
        <div className={styles.Card_cardTypes}>
          <span>
            Карточек: <strong>{length}</strong>
          </span>
          <ul className={styles.Card_cardTypesList}>
            {[...cardTypes].map((cardType, ix) => (
              <li
                key={`cardType${ix}`}
                style={{
                  color: getDotColor(cardType)
                }}
              >
                •
              </li>
            ))}
          </ul>
        </div>
      )}
      <Tag text="js" />
    </section>
    <section className={styles.Card_main}>
      {lesson ? (
        <h2 className={styles.Card_title}>
          <strong>{lesson}</strong>
        </h2>
      ) : null}
      <h3 className={styles.Card_title}>{title}</h3>
    </section>
    <section className={styles.Card_footer}>
      <button className={styles.Button}>
        <Play size={30} onClick={handleClick} />
      </button>
    </section>
  </li>
);

export const DecksList = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <section className={styles.Section}>
        <h2 className={styles.Section_heading}>Занятия</h2>
        <ul className={styles.Cards}>
          {data.lessons.map(
            ({ title, url, length, type, cardTypes, lesson }, ix) => (
              <Deck
                key={`lesson_${title}`}
                title={title}
                lesson={lesson}
                length={length}
                type={type ?? 'basic'}
                cardTypes={cardTypes}
                handleClick={() => {
                  navigate(url);
                }}
              />
            )
          )}
        </ul>
      </section>
      <section className={styles.Section}>
        <h2 className={styles.Section_heading}>Темы</h2>
        <ul className={styles.Cards}>
          {data.topics.map(({ title, url, length, type, cardTypes }) => (
            <Deck
              key={`topic_${title}`}
              title={title}
              length={length}
              type={type ?? 'basic'}
              cardTypes={cardTypes}
              handleClick={() => {
                navigate(url);
              }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};
