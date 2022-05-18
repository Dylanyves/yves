import React from "react";
import Head from "next/head";

function Custom500() {
    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <div className="relative max-w-5xl m-auto px-10 min-h-[50vh] text-center">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-7xl md:text-8xl">500</h1>
                    <p className="text-sm md:text-base">
                        Server-side error occurred. Try refreshing or come back
                        later
                    </p>
                </div>
            </div>
        </>
    );
}

export default Custom500;
