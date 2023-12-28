import Head from 'next/head';
import InfoCard from '@/components/infocard';
import Summary from '@/components/about/summary';
import EmploymentHistory from '@/components/about/employment/employment';
import Skills from '@/components/about/skills';

export default function About() {
    return (
        <>
            <Head>
                <title>Philip Diegel - About</title>
            </Head>
            <main className='content'>
                <div className='wrapper'>
                    <InfoCard><Summary /></InfoCard>
                    <InfoCard><EmploymentHistory /></InfoCard>
                    <InfoCard><Skills /></InfoCard>
                </div>
            </main>
        </>
    )
}
