import Link from "next/link"
import Meta from "../../components/Meta"
import styles from '../../styles/Ninja.module.css'

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const people = await res.json()
    return {
        props: { people }
    }
}
const Ninja = ({ people }) => {
    return (
        <>
            <Meta title="All ninja list" />
            <div className="container">
                <h1>Ninja lists</h1>
                <ul className={styles.ninja_lists}>
                    {people.map(person => <li key={person.id}><Link href={`/ninja/${person.id}`}><a>{person.name}</a></Link></li>)}
                </ul>
            </div>
        </>
    )
}

export default Ninja
