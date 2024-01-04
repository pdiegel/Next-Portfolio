import Link from 'next/link';
import styles from '@/styles/Projects.module.css';
import languageIconMap from '@/public/languages/language_icon_map.json';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FromBelowEntryDiv from '../fromBelowEntryDiv';

export default function RepoCard({ description, html_url, name, languages_url, homepage }) {
    const [languages, setLanguages] = useState([]);


    useEffect(() => {
        const cachedLanguages = localStorage.getItem(`languages_${name}`);
        if (typeof cachedLanguages === 'string' && cachedLanguages.length > 0) {
            setLanguages(JSON.parse(cachedLanguages));
            console.log(`Loaded cached languages for ${name}`);
            return;
        }
        fetch(languages_url)
            .then(req => {
                return req.status === 200 && req.json();
            })
            .then(data => {
                localStorage.setItem(`languages_${name}`, JSON.stringify(Object.keys(data)));
                setLanguages(Object.keys(data));
            })
            .catch(err => {
                console.log(`Error fetching data: ${err}`);
            });
    }, [languages_url, name]);

    return (
        <FromBelowEntryDiv className={styles.card}>
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
            <div className={styles.cardLinks}>
                {homepage && <Link href={homepage} target='_blank'>View Live</Link>}
                {html_url && <Link href={html_url} target='_blank'>View on GitHub</Link>}
            </div>
        </FromBelowEntryDiv>
    )
}