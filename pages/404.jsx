import Link from 'next/link'
import styles from '../styles/Error.module.css'

const notFound = () => {
    return (
        <div className='container'>
            <div className={styles.error}>
                <h1>404! nothing found</h1>
                <p>The page you are looking for is not currently available.</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        </div>
    )
}

export default notFound
