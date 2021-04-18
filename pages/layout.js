import Link from 'next/link'
import styles from '../styles/Layout.module.css'


export default function Layout({ children }) {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <h1>PRAMILA</h1>
                </div>
                <ul>
                    <li>
                        <Link href="/">            
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            Cart
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                                <div className={styles.bar}></div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <div className={styles.left_content}>
                    <p><b>Made By: </b>Team 3<br /><b>Batch: </b>2022<br /></p>
                </div>
                <div className={styles.mid_content}>
                    <h2>OOAD Mini Project Implementation</h2>
                    <p>
                    <b>Abrit Pal Singh</b> 185001007<br/>
                    <b>Aviansh Gupta</b> 185001028<br />
                    <b>Ayush Nanda</b> 185001031<br />
                    </p>
                </div>
                <div className={styles.right_content}>
                    <p><b>Class: </b>CSE A<br /><b>Year: </b>III<br /></p>
                </div>
            </footer>
        </>
    )
}


{
    

}