import { Share } from 'react-feather';
import Tag from '../Tag';
import styles from './Deck.module.css';

const getDotColor = (cardType) =>
  cardType === 't'
    ? 'rgb(160, 160, 160)'
    : cardType === 'q'
      ? '#8f00ff'
      : '#03c04a';


export default function Deck({ title, length, type, cardTypes = '' }) {
  return (
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
        <h3 className={styles.Card_title}>{title}</h3>
      </section>
      <section className={styles.Card_footer}>
      </section>
    </li>
  )
}
