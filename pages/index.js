import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

// Posts
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    // allPostsData => Array()
    //id: '', title: '', date: ''}
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <p>Hi! I'm Arm.</p>
                <h2 className={utilStyles.headingLg}>Latest Blogs</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, readingTime }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} /> · {readingTime} min
                                read
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
