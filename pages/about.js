import React from "react";
import { getAboutDescription } from "../services/index";
import Head from "next/head";

function about(res) {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <section className="">
                <div className="max-w-5xl m-auto py-32 px-10">
                    <h1 className="mb-10 text-xl md:text-2xl xl:text-3xl border-black">
                        About Me
                    </h1>
                    <div>
                        <div className="mb-5">
                            <h2 className="sm:text-lg xl:text-xl">
                                Dylan Mac Yves
                            </h2>
                            <article className="text-yellow-500 text-sm sm:text-base xl:text-lg font-light">
                                Student | Web Developer | Data Scientist
                            </article>
                        </div>
                        {res && (
                            <p className="text-gray-500 text-sm lg:text-base whitespace-pre-wrap">
                                {res.res.aboutMes[0].description}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default about;

export async function getStaticProps() {
    const res = await getAboutDescription();
    return {
        props: { res },
    };
}
