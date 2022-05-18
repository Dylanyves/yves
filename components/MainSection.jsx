import React from "react";

import { socialMedia } from "../vars/social_media";

function MainSection() {
    return (
        <main data-aos="zoom-in" className="min-h-[85vh]">
            <div className="max-w-5xl m-auto py-2 px-10">
                <header className="text-center mt-20">
                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-thin uppercase">
                        Dylan Mac Yves
                    </h1>
                    <article className="text-sm sm:text-base xl:text-lg font-light">
                        Student | Web Developer | Data Scientist
                    </article>
                </header>

                <ul className="mt-20 flex flex-col space-y-2 max-w-md m-auto font-light">
                    {socialMedia.map((item, index) => (
                        <li key={index}>
                            <a
                                className="p-2 block border border-black text-center hover:bg-black hover:text-white ease duration-100"
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div></div>
            </div>
        </main>
    );
}

export default MainSection;
