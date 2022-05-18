import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getLatestWorks } from "../services/index";

function ProjectsSection() {
    const [works, setWorks] = useState(null);

    useEffect(() => {
        fetch(
            getLatestWorks()
                .then((res) => {
                    if (typeof res === "object") {
                        setWorks(res.portfolioProjects);
                    } else {
                        throw Error("Could not fetch latest works");
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                })
        );
    }, []);

    return (
        <section className="">
            <div
                data-aos="fade-right"
                className="max-w-5xl m-auto py-32 px-6 sm:px-10"
            >
                <h2 className="text-center mb-10 text-xl md:text-2xl xl:text-3xl border-black">
                    Latest Works
                </h2>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    {works &&
                        works.map((work) => (
                            <Link
                                href={work.projectLink}
                                passHref
                                key={work.id}
                            >
                                <a target="_blank">
                                    <div className="flex md:items-center md:flex-col gap-6 cursor-pointer group">
                                        <img
                                            className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 border rounded-full"
                                            src={work.projectImage.url}
                                            alt=""
                                        />
                                        <div className="m-auto md:text-center">
                                            <h4 className="xl:text-lg">
                                                {work.projectName}
                                            </h4>
                                            <p className="group-hover:underline text-sm xl:text-base xl:font-light text-gray-500 ">
                                                {`${work.projectDescription.slice(
                                                    0,
                                                    100
                                                )}...`}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href="/works">
                        <span className="text-yellow-500 cursor-pointer hover:text-yellow-600">
                            All Works
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
