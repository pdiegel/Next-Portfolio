import '@/styles/globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
    return (
        <div className='container'>
            <Header />
            <Component {...pageProps} />
            <Analytics />
            <Footer />
        </div>
    );
}
