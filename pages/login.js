import styles from '../styles/login.module.css';
import Link from 'next/link'

export default function Login() {
    const password = 'gmail@123'
    const username = 'aviansh'
    return(
    <div className={styles.loginform}>
        <h2 className={styles.headerTitle}>login</h2>
            <div className={styles.row}> 
            <label>Username</label>
            <input type="text" placeholder="username" />
            </div>
            <div className={styles.row}>
            <label>Password</label>
            <input type="text" placeholder="password" />
            </div>
            <div className={styles.row}>
            <Link href="/">
            <button>Login</button>
            </Link> 
            </div>

    </div>
)}