import styles from '@/styles/About.module.css'
import FromBelowEntryDiv from '@/components/fromBelowEntryDiv';

export default function InfoCard(props) {
    return (
        <FromBelowEntryDiv className={styles.card}>
            {props.children}
        </FromBelowEntryDiv>
    )
}