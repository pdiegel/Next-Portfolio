import Head from "next/head";
import FromBelowEntryDiv from "@/components/fromBelowEntryDiv";
import styles from "@/styles/Contact.module.css";
import React from "react";
import FromLeftEntryDiv from "@/components/fromLeftEntryDiv";

export default function Contact() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formDataObj = {} as { [key: string]: FormDataEntryValue };
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    console.log(JSON.stringify(formDataObj));

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formDataObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was an error sending your message.");
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
          <FromBelowEntryDiv className="wrapper sectionText">
            <p>
              Phone: <a href="tel:1-941-416-0937">(941) 416-0937</a>
              <br />
              If you would like to contact me via email, please use the form
              below.
            </p>

            <form
              onSubmit={(e) => submitForm(e)}
              name="contact"
              method="POST"
              data-netlify="true"
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className={styles.formGroup}>
                <label>Name</label> <input type="text" name="name" />
              </p>
              <p className={styles.formGroup}>
                <label>Email</label> <input type="email" name="email" />
              </p>
              <p className={styles.formGroup}>
                <label>Message</label> <textarea name="message"></textarea>
              </p>
              <p className={styles.formGroup}>
                <button className="primary-button" type="submit">
                  Send
                </button>
              </p>
            </form>
          </FromBelowEntryDiv>
        </section>
      </main>
    </>
  );
}
