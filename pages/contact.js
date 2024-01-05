import Head from 'next/head';
import FromBelowEntryDiv from '@/components/fromBelowEntryDiv';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Philip Diegel - Contact Me</title>
            </Head>
            <main className='content wrapper'>
                <FromBelowEntryDiv>
                    <h2>Contact Me</h2>
                    <p>
                        Phone: <a href="tel:1-941-416-0937">(941) 416-0937</a><br />
                        If you would like to contact me via email, please use the form below.
                    </p>

                    <form name="contact" method="POST" data-netlify="true" className={styles.form}>
                        <input type="hidden" name="form-name" value="contact" />
                        <p className={styles.formGroup}>
                            <label>Name:</label> <input type="text" name="name" />
                        </p>
                        <p className={styles.formGroup}>
                            <label>Email:</label> <input type="email" name="email" />
                        </p>
                        <p className={styles.formGroup}>
                            <label>Message:</label> <textarea name="message"></textarea>
                        </p>
                        <p className={styles.formGroup}>
                            <button className='primary-button' type="submit">Send</button>
                        </p>
                    </form>
                </FromBelowEntryDiv>
            </main>
        </>
    )
}
