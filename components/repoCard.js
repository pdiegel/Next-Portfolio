import Link from 'next/link';
import styles from '@/styles/Projects.module.css';

export default function RepoCard(props) {
    const { description, url, name, tags } = props;

    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>

            <h4>Tags:</h4>
            <p>
                {tags && tags.map((tag, index) => {
                    return <span key={index}>{tag}, </span>
                })}
            </p>
            {url && <Link href={url}>View on GitHub</Link>}
        </div>
    )
}