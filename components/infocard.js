import styles from '@/styles/About.module.css'

export default function InfoCard(props) {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}