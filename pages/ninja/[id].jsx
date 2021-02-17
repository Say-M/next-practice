import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Details.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const people = await res.json()

    const paths = people.map(person => ({ params: { id: person.id.toString() } }))
    return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const person = await res.json()
    return { props: { person } }
}
const details = ({ person }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{person.name}'s Profile</title>
            </Head>
            <div className="container">
                <div className={styles.details}>
                    <h1>{person.username}</h1>
                    <small>{person.email}</small>
                    <address>{person.address.suite} {person.address.street} {person.address.city} {person.address.zipcode}</address>
                    <div className={styles.bg_white}>
                        <p><strong>name :</strong><span>{person.name}</span></p>
                        <p><strong>phone :</strong><span>{person.phone}</span></p>
                        <p><strong>company :</strong><span>{person.company.name}</span></p>
                        <p><strong>website :</strong><span>{person.website}</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default details
