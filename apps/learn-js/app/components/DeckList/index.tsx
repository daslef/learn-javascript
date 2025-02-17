import Deck from '../Deck';
import { data } from '../../data';
import styles from './DeckList.module.css'
import { Link } from '@tanstack/react-router';

export default function DeckList() {
    return (
        <main className={styles.main}>
            <section className={styles.Section}>
                <h2 className={styles.Section_heading}>Темы</h2>
                <ul className={styles.Cards}>
                    {data.topics.map(({ title, slug, length, type, cardTypes }) => (
                        <Link to="/topics/$topicId" params={{ topicId: slug }} className={styles.Card_Link}>
                            <Deck
                                key={`topic_${title}`}
                                title={title}
                                length={length}
                                type={type ?? 'basic'}
                                cardTypes={cardTypes}
                            />
                        </Link>
                    ))}
                </ul>
            </section>
        </main>
    )
}