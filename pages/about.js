import Head from 'next/head';
import InfoCard from '@/components/infocard';
import Summary from '@/components/about/summary';
import EmploymentHistory from '@/components/about/employment/employment';
import Skills from '@/components/about/skills';
import Education from '@/components/about/education/education';
import Certifications from '@/components/about/certifications';

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
                    <InfoCard><Education /></InfoCard>
                    <InfoCard>
                        <Certifications
                            certificateName="Python Coding Specialist"
                            issuer="Knowledge Pillars"
                            date="March 2023"
                            blockchainID="781963"
                            URL="https://www.credential.net/88eee900-f28e-4f0a-be52-8b452bf40194" />
                    </InfoCard>
                </div>
            </main>
        </>
    )
}
