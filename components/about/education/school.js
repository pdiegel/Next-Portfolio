import styles from '@/styles/About.module.css'

export default function School(props) {
    const { description, name, location, startDate, endDate } = props
    return (
        <div className={styles.school}>
            <h3>{description}</h3>
            <p>
                <strong>{name}</strong> • {location} • {startDate} {endDate && `- ${endDate}`}
            </p>
            {props.children}
        </div>
    )
}