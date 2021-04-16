import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>e-Book Manager</title>
      </Head>
      <nav className={styles.nav}>
        <h1>NAV</h1>
      </nav>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Hello</h1>
        </div>
        <div className={styles.card}>
          <h1>Hello</h1>
        </div>
        <div className={styles.card}>
          <h1>Hello</h1>
        </div>
        <div className={styles.card}>
          <h1>Hello</h1>
        </div>
      </div>
      <footer className={styles.footer}>
        <h1>footer</h1>
      </footer>
    </>
  )
}
