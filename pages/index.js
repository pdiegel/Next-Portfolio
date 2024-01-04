import Head from 'next/head'
import PortraitImg from '@/public/portrait.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Philip Diegel - Portfolio</title>
            </Head>
            <main className='content'>
                <div className='wrapper'>
                    <h2>Hi, I&apos;m Philip!</h2>
                    <Image className='portrait' src={PortraitImg} alt='Portrait' />

                    <p className='introduction'>
                        Software developer in Sarasota, Florida.
                        Passionate about innovation and coding,
                        committed to bringing creativity and
                        efficiency to every project.
                    </p>
                    <div className='home-buttons'>
                        <Link href="/portfolio">My Projects</Link>
                        <Link href="/contact">Contact Me</Link>
                    </div>
                </div>
            </main>
        </>
    )
}
