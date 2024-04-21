import Head from "next/head";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import styles from "@/styles/Contact.module.css";
import React, { use, useEffect, useState } from "react";
import FromLeftEntryDiv from "@/components/fromLeftEntryDiv";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formDataObj = {} as { [key: string]: FormDataEntryValue };
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formDataObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        setOpen(true);
        form.reset();
      } else {
        setError("There was an error sending your message.");
        setOpen(true);
      }
    });
  };

  return (
    <>
      <Head>
        <title>Philip Diegel - Contact Me</title>
      </Head>
      <main className="content">
        <section className="darkSection">
          <FromLeftEntryDiv>
            <h1>Contact Me</h1>
          </FromLeftEntryDiv>
        </section>
        <section>
          <FromBelowEntryDiv className={`wrapper ${styles.sectionContent}`}>
            <div className={`${styles.contactInfo}`}>
              <a href="tel:1-941-416-0937">Phone: (941) 416-0937</a>
              <p>
                If you would like to contact me via email, please use the form
                below.
              </p>
            </div>

            <form
              onSubmit={(e) => submitForm(e)}
              name="contact"
              method="POST"
              data-netlify="true"
              className={styles.form}
            >
              <p className={styles.formGroup}>
                <label htmlFor="name">
                  Name
                  <input type="text" name="name" id="name" required />
                </label>
              </p>
              <p className={styles.formGroup}>
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" id="email" required />
                </label>
              </p>
              <p className={styles.formGroup}>
                <label htmlFor="message">
                  Message
                  <textarea name="message" id="message" required></textarea>
                </label>
              </p>
              <p className={styles.formGroup}>
                <button className="primary-button" type="submit">
                  Send
                </button>
              </p>
            </form>
          </FromBelowEntryDiv>
          {open && (
            <section className={styles.successMessage}>
              {!error && <p>Message sent successfully!</p>}
              {error && <p>{error}</p>}
              <button onClick={() => setOpen(false)} className="primary-button">
                Close
              </button>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
