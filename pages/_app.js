import '@/styles/globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function App({ Component, pageProps }) {
    return (
        <div className='container'>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
