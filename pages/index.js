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
                    <h3>Software Developer</h3>
                    <Image src={PortraitImg} alt='Portrait' />

                    <p>Based in Sarasota, Florida, I am a Software Developer
                        passionate about innovation and coding. With a strong
                        foundation and continuous curiosity, I aim to add creativity,
                        efficiency, and problem-solving skills to every project.</p>
                    <div className='home-buttons'>
                        <Link href="/portfolio">My Projects</Link>
                        <Link href="/contact">Contact Me</Link>
                    </div>
                </div>
            </main>
        </>
    )
}
