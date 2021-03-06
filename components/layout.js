import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "BESTCULLING";
export const siteTitle = `${name} Blog Website`;

export default function Layout({ children, home }) {
    useEffect(() => {
        var _self =
            typeof window !== "undefined"
                ? window // if in browser
                : typeof WorkerGlobalScope !== "undefined" &&
                  self instanceof WorkerGlobalScope
                ? self // if in worker
                : {}; // if in node js
    }, []);

    // Automatically Generates Unique Class Names
    // layout_container__...
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={siteTitle} />
                {/* which are used to describe a page's content */}
                {/* <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
                    as="script"
                />
                <link
                    rel="preload"
                    href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
                    as="script"
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            //When true, the image will be considered high priority and preload.
                            // Should only be used when the image is visible above the fold. Defaults to false.
                            priority
                            src="/images/me.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/me.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {name}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>??? Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
