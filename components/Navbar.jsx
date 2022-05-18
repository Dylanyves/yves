import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getExternalLinks } from "../services/index";

function Navbar() {
    const [links, setLinks] = useState();
    useEffect(() => {
        fetch(
            getExternalLinks()
                .then((res) => {
                    if (typeof res === "object") {
                        setLinks(res.externalLinks);
                    } else {
                        throw Error("Could not fetch links");
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                })
        );
    }, []);

    return (
        <nav>
            <div className="bg-white">
                <div className="max-w-7xl min-h-[5vh] m-auto py-2 px-6 flex justify-between">
                    <Link href="/">
                        <span className="cursor-pointer tracking-widest">
                            MAC
                            <span className="text-[10px] tracking-normal font-medium">
                                .yves
                            </span>
                        </span>
                    </Link>
                    <ul className="text-xs flex items-center space-x-4 sm:text-sm">
                        <li className="hover:font-medium cursor-pointer">
                            <Link href="/works">Works</Link>
                        </li>
                        <li className="hover:font-medium cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-black border-b-4 border-yellow-500">
                <div className="max-w-7xl m-auto py-6 px-6 text-white min-h-[10vh] flex items-center justify-end">
                    <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                        {links &&
                            links.map((link) => {
                                if (link.display) {
                                    return (
                                        <Link
                                            key={link.id}
                                            href={link.link}
                                            passHref
                                        >
                                            <a
                                                className="bg-white hover:bg-gray-200 ease duration-200 text-black py-1 px-2 cursor-pointer"
                                                target="_blank"
                                            >
                                                {link.name}
                                            </a>
                                        </Link>
                                    );
                                }
                            })}
                        <Link href="#contact">
                            <span className="bg-yellow-500 hover:bg-yellow-600 ease duration-200 text-white py-1 px-2 cursor-pointer">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
