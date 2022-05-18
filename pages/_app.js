import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Visit my website portfolio to see information about me, my latest projects, and many more."
                />
                <meta name="keywords" content="Dylan, Mac, Yves, Portfolio" />
                <meta name="author" content="Dylan Mac Yves" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/my-image-circle.png" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
