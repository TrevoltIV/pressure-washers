import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import styles from '@/styles/home.module.css'



export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Submit contact form data to backend
  const handleContactSubmit = () => {
    if (formData.name !== '' && formData.email !== '' && formData.message !== '') {
      alert('Thanks for contacting us! We will get back to you as soon as possible.')
      // Send email to website owner with formData, .then =>
      const nameInput = document.getElementById('name')
      const emailInput = document.getElementById('email')
      const phoneInput = document.getElementById('phone')
      const messageInput = document.getElementById('message')

      nameInput.value = ''
      emailInput.value = ''
      phoneInput.value = ''
      messageInput.value = ''

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      alert('Please fill out all required fields.')
    }
  }

  // Update formData state when user inputs data
  const handleContactInput = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  return (
    <>
      <Head>
        <title> FRESH | Pressure Washers</title>
        <meta name="description" content="An example web application using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.ctaWrapper}>
            <div className={styles.cta}>
              <div className={styles.ctaImageWrapper}>
                <Image
                  src="/concrete.png"
                  alt="Concrete Before Picture"
                  width={4640}
                  height={2610}
                  className={styles.ctaImage}
                />
              </div>
              <div className={styles.ctaTextWrapper}>
                <h1 className={styles.ctaTitle}>Concrete Wash</h1>
                <p className={styles.ctaText}>
                  Concrete is our specialty. We have the equipment and experience to get the job done right. We can clean your driveway, sidewalk, patio, pool deck, and more.
                  If your concrete is looking dated, we can help. We can remove years of dirt and grime to make your concrete look like new again.
                  Our expert technicians will use the right equipment and the right pressure to get the job done right.
                  Click below to get a free quote!
                </p>
                <div className={styles.ctaButtonWrapper}>
                  <Link className={styles.ctaButton} href="/estimate">Get a Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactFormWrapper}>
            <h2 className={styles.contactFormTitle}>Contact Us</h2>
            <div className={styles.contactForm}>
              <div className={styles.contactFormInfoInputs}>
                <input
                  type="text"
                  placeholder="*Name"
                  className={styles.contactFormInput}
                  id="name"
                  onChange={(e) => handleContactInput(e)}
                />
                <input
                  type="text"
                  placeholder="*Email"
                  className={styles.contactFormInput}
                  id="email"
                  onChange={(e) => handleContactInput(e)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className={styles.contactFormInput}
                  id="phone"
                  onChange={(e) => handleContactInput(e)}
                />
              </div>
              <textarea
                placeholder="*Message"
                className={styles.contactFormTextarea}
                id="message"
                onChange={(e) => handleContactInput(e)}
              />
            </div>
            <button className={styles.contactFormButton} onClick={handleContactSubmit}>Submit</button>
          </div>
        </div>
        <div className={styles.footer}>
          Footer
        </div>
      </div>
    </>
  )
}
