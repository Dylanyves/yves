import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getAboutDescription } from "../services/index";

function AboutSection() {
    const [description, setDescription] = useState(null);

    useEffect(() => {
        async function getData() {
            const res = await getAboutDescription();
            if (typeof res === "object") {
                setDescription(res.aboutMes[0]);
            } else {
                console.log("error");
            }
        }
        getData();
    }, []);

    return (
        <section className="bg-gray-100">
            <div data-aos="fade-left" className="max-w-5xl m-auto py-32 px-10">
                <h2 className="mb-5 text-xl md:text-2xl xl:text-3xl border-black">
                    About me
                </h2>
                <div className="font-light">
                    <p className="mb-5 whitespace-pre-wrap text-sm md:text-base xl:text-lg">
                        {description &&
                            `${description.description.slice(0, 400)}....`}
                    </p>
                    <Link href="/about">
                        <span className="text-yellow-500 cursor-pointer hover:text-yellow-600">
                            Read More
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
