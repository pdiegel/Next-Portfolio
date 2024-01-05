import Head from 'next/head'
import PortraitImg from '@/public/portrait.jpg'
import Image from 'next/image'
import Link from 'next/link'
import FromBelowEntryDiv from '@/components/fromBelowEntryDiv'

export default function Home() {
    return (
        <>
            <Head>
                <title>Philip Diegel - Portfolio</title>
            </Head>
            <main className='content'>
                <FromBelowEntryDiv className='wrapper'>
                    <h2>Hi, I&apos;m Philip!</h2>
                    <Image className='portrait' src={PortraitImg} alt='Portrait' />

                    <p className='introduction'>
                        Software developer in Sarasota, Florida.
                        Passionate about innovation and coding,
                        committed to bringing creativity and
                        efficiency to every project.
                    </p>
                    <div className='home-buttons'>
                        <Link className='primary-button' href="/projects">My Projects</Link>
                        <Link className='primary-button' href="/contact">Contact Me</Link>
                    </div>
                </FromBelowEntryDiv>
            </main>
        </>
    )
}
