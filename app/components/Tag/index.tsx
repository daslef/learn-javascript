import styles from './Tag.module.css'

export default function Tag({ text, color }) {
    return (
        <span className={styles.Tag} style={{ backgroundColor: color }}>
            {text}
        </span>
    )
} 
