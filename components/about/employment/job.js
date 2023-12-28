import styles from '@/styles/About.module.css'

export default function Job(props) {
    const { jobTitle, company, location, startDate, endDate } = props
    return (
        <>
            <h3>{jobTitle}</h3>
            <p>
                <strong>{company}</strong> • {location} • {startDate} - {endDate}
            </p>
            <ul>
                {props.children}
            </ul>
        </>
    )
}