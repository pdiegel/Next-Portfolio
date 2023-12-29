import Head from 'next/head';
import RepoCard from '@/components/repoCard';
import { useState, useEffect } from 'react';
import styles from '@/styles/Projects.module.css';

export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('api/repos')
            .then(req => req.status === 200 && req.json())
            .then(data => {
                console.log(data);
                setRepos(data);
            }
            );
    }, []);

    repos.length !== 0 && console.log(repos);

    return (
        <>
            <Head>
                <title>Philip Diegel - Projects</title>
            </Head>
            <main className='content'>
                <div className='wrapper'>

                    <h2>My Projects</h2>
                    <div className={styles.cardWrapper}>
                        {repos && repos.map(({ description, html_url, name, topics }, index) => {
                            return <RepoCard key={index} description={description} url={html_url} name={name} tags={topics} />;
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}
