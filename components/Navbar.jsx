import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <header>
                <div className={styles.logo}><Link href="/"><a>Ninja</a></Link></div>
                <ul className={styles.lists}>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/ninja"><a>Ninjas</a></Link></li>
                </ul>
            </header>
        </nav>
    )
}

export default Navbar
