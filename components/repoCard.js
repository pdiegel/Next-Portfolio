import Link from 'next/link';
import styles from '@/styles/Projects.module.css';
import languageIconMap from '@/public/languages/language_icon_map.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RepoCard(props) {
    const [languages, setLanguages] = useState([]);
    const { description, url, name, languagesURL } = props;

    useEffect(() => {
        fetch(languagesURL)
            .then(req => req.status === 200 && req.json())
            .then(data => {
                console.log(data);
                setLanguages(Object.keys(data));
            }
            );
    }, [languagesURL]);

    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>

            <h3>Languages Used:</h3>
            <p>
                {languages && languages.map((value, index) => {
                    if (value in languageIconMap) {
                        return <Image className={styles.languageIcon} key={index} src={languageIconMap[value]} alt={value} width={50} height={50} />
                    }
                    return <span key={index}>{value}, </span>
                })}
            </p>
            {url && <Link href={url}>View on GitHub</Link>}
        </div>
    )
}