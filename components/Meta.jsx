import Head from "next/head"

const Meta = ({ title, description, keywords, author }) => {
    return (
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Ninjas listing with nextjs',
    description: 'Practicing nextjs with https://jsonplaceholder.typicode',
    keywords: 'html, css, javascript, react, nextjs, web design, web development, practice',
    author: 'Mohammad Sayem'
}
export default Meta
