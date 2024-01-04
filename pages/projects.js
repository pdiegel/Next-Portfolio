import Head from 'next/head';
import RepoCard from '@/components/projects/repoCard';
import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/Projects.module.css';
import SelectionBox from '@/components/selectionbox';
import FromLeftEntryDiv from '@/components/fromLeftEntryDiv';
import Image from 'next/image';
import LoadingImg from '@/public/loading.gif';

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const [sortType, setSortType] = useState('date');
    const [sortDirection, setSortDirection] = useState('desc');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sortRepos = useCallback((repos) => {
        // Sort the repos by date or name, ascending or descending
        // Making a copy, because React doesn't behave well when you mutate state directly
        const sortedRepos = [...repos];

        if (sortType === 'date') {
            if (sortDirection === 'desc') {
                console.log('sorting by date desc');
                return sortedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            } else {
                console.log('sorting by date asc');
                return sortedRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            }
        } else {
            if (sortDirection === 'desc') {
                console.log('sorting by name desc');
                return sortedRepos.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                console.log('sorting by name asc');
                return sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
            }
        }
    }, [sortDirection, sortType]);

    useEffect(() => {
        setLoading(true);
        fetch('api/repos')
            .then(req => req.status === 200 && req.json())
            .then(data => {
                console.log(data);
                setRepos(sortRepos(data));
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
        // We do not want to re-run this effect when sortRepos changes, 
        // as we are sorting the repos locally, not fetching them again.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setRepos(r => sortRepos([...r]));
    }, [sortRepos]);

    const loadingContents = <Image id={styles.loading} src={LoadingImg} alt='Loading' height={50} width={50} />;
    const errorContents = <p>Error loading projects!</p>;
    const noReposContents = <p>No repos found!</p>;

    const repoCards = repos.map((repo) => {
        // Deconstruct the repo object into the props of RepoCard
        return <RepoCard key={repo.id} {...repo} />;
    });

    const validRepoContents = (<FromLeftEntryDiv className='wrapper' >
        <h2 className={styles.heading}>My Projects</h2>

        <SelectionBox
            onChange={(e) => setSortType(e.target.value)}
            name='sortType'
            label='Sort by:'
            value={sortType}
        >
            <option value='date'>Date</option>
            <option value='name'>Name</option>
        </SelectionBox>

        <SelectionBox
            onChange={(e) => setSortDirection(e.target.value)}
            name='sortDirection'
            label='Direction:'
            value={sortDirection}
        >
            <option value='desc'>Descending</option>
            <option value='asc'>Ascending</option>
        </SelectionBox>

        <div className={styles.cardWrapper}>
            {repos && repoCards}
        </div>
    </FromLeftEntryDiv>)



    return (
        <>
            <Head>
                <title>Philip Diegel - Projects</title>
            </Head>
            <main className='content'>
                {loading && loadingContents}
                {error && errorContents}
                {!loading && !error && repos.length === 0 && noReposContents}
                {/* If we have repos, we will display them in the card wrapper */}
                {!loading && !error && repos.length > 0 && validRepoContents}
            </main>
        </>
    )
}
