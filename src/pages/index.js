import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'



export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  // Close menu when clicking outside of it
  useEffect(() => {
    window.addEventListener('click', (e) => {
      const menuBtn = document.querySelector(`.${styles.menuBtn}`)
      const menu = document.querySelector(`.${styles.menu}`)
      const header = document.querySelector(`.${styles.header}`)
      if (!menuBtn.contains(e.target) &&
      !menuBtn.contains(e.target) &&
      e.target !== menuBtn &&
      e.target !== menu &&
      e.target !== header &&
      !header.contains(e.target) &&
      showMenu) {
        setShowMenu(false)
      }
    })
  })

  return (
    <>
      <Head>
        <title>Pressure Washers</title>
        <meta name="description" content="An example web application using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerSidebox}>
            <div className={styles.banner}>
              <h1 className={styles.bannerTitle}>GRAND OPENING SALE</h1>
              <p className={styles.bannerText}>Get 10% off your first service</p>
            </div>
          </div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Pressure Washers Logo"
              width={1920}
              height={1080}
              className={styles.logo}
            />
          </Link>
          <div className={styles.headerSidebox}>
            <div className={styles.menuBtn} onClick={() => setShowMenu(!showMenu)}>
              <div className={styles.menuBtnLine}></div>
              <div className={styles.menuBtnLine}></div>
              <div className={styles.menuBtnLine}></div>
            </div>
          </div>
        </div>
        <div className={showMenu ? styles.menu : styles.menuCollapsed}>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/">Home</Link>
          </div>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/contact">Contact</Link>
          </div>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/about">About</Link>
          </div>
          <div className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="/estimate">Get Estimate</Link>
          </div>
        </div>
      </div>
    </>
  )
}
