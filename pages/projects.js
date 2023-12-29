import Head from 'next/head';
import RepoCard from '@/components/repoCard';
import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/Projects.module.css';
import SelectionBox from '@/components/selectionbox';

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const [sortType, setSortType] = useState('date');
    const [sortDirection, setSortDirection] = useState('desc');

    const sortRepos = useCallback((repos) => {
        if (sortType === 'date') {
            if (sortDirection === 'desc') {
                return repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            } else {
                return repos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            }
        } else {
            if (sortDirection === 'desc') {
                return repos.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                return repos.sort((a, b) => a.name.localeCompare(b.name));
            }
        }
    }, [sortType, sortDirection]);

    useEffect(() => {
        fetch('api/repos')
            .then(req => req.status === 200 && req.json())
            .then(data => {
                console.log(data);
                setRepos(sortRepos(data));
            }
            );
    }, [sortRepos]);

    useEffect(() => {
        setRepos(sortRepos(repos));
    }, [sortType, sortDirection, repos, sortRepos]);



    return (
        <>
            <Head>
                <title>Philip Diegel - Projects</title>
            </Head>
            <main className='content'>
                <div className='wrapper'>

                    <h2 className={styles.heading}>My Projects</h2>

                    <SelectionBox
                        onChange={(e) => setSortType(e.target.value)}
                        name='sortType'
                        label='Sort by:' >
                        <option value='date'>Date</option>
                        <option value='name'>Name</option>
                    </SelectionBox>

                    <SelectionBox
                        onChange={(e) => setSortDirection(e.target.value)}
                        name='sortDirection'
                        label='Direction:' >
                        <option value='desc'>Descending</option>
                        <option value='asc'>Ascending</option>
                    </SelectionBox>

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
