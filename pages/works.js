import React from "react";
import Link from "next/link";
import Head from "next/head";
import { getWorks } from "../services/index";

function works(res) {
    return (
        <>
            <Head>
                <title>Works</title>
            </Head>
            <main className="">
                <div className="max-w-5xl m-auto py-20 px-6 sm:px-10">
                    <h1 className="mb-10 text-xl md:text-2xl xl:text-3xl border-black">
                        All Works
                    </h1>
                    <div className="flex flex-col gap-14 justify-center">
                        {res &&
                            res.res.portfolioProjects.map((work) => (
                                <Link
                                    href={work.projectLink}
                                    passHref
                                    key={work.id}
                                >
                                    <a target="_blank">
                                        <div className="flex gap-6 cursor-pointer group">
                                            <img
                                                className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 border rounded-full"
                                                src={work.projectImage.url}
                                                alt=""
                                            />
                                            <div className="my-auto">
                                                <h4 className="">
                                                    {work.projectName}
                                                </h4>
                                                <p className="group-hover:underline text-sm text-gray-500 ">
                                                    {work.projectDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default works;

export async function getStaticProps() {
    const res = await getWorks();
    return {
        props: { res },
    };
}
