import React from "react";

function SkillsSection() {
    return (
        <section className="bg-gray-100">
            <div
                id="skills"
                data-aos="zoom-out"
                className="max-w-5xl m-auto py-32 px-10"
            >
                <h2 className="mb-10 text-xl md:text-2xl xl:text-3xl border-black">
                    Skills and Tools I use
                </h2>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8">
                        <div className="grid grid-cols-1 gap-y-8 auto-rows-min border-b pb-8 lg:border-0 lg:pb-0">
                            <div className="">
                                <i className="fa-solid fa-code bg-yellow-500 text-white p-2 rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Front-end Development
                                    </h4>
                                    <p className="text-sm">
                                        HTML, CSS, React, Tailwind
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <i className="fa-solid fa-gears bg-yellow-500 text-white p-2 rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Back-end Development
                                    </h4>
                                    <p className="text-sm">
                                        Next Js, Flask, Node Js
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <i className="fa-solid fa-diagram-project bg-yellow-500 text-white p-2 rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Data Science
                                    </h4>
                                    <p className="text-sm">
                                        Pandas, Matplotlib, Seaborn, Plotly
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <i className="fa-solid fa-robot bg-yellow-500 text-white p-2 rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Machine Learning
                                    </h4>
                                    <p className="text-sm">
                                        Scikit-Learn, TensorFlow, NLTK
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-8 auto-rows-min border-b pb-8 sm:border-0 sm:pb-0">
                            <div className="">
                                <i className="fa-solid fa-pen bg-yellow-500 text-white p-2 rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Writting
                                    </h4>
                                    <p className="text-sm">
                                        I write blog posts
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <i className="fa-solid fa-video bg-yellow-500 text-white p-2 rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Content Creator
                                    </h4>
                                    <p className="text-sm">
                                        I post tech videos on Instagram
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-8 auto-rows-min">
                            <div className="">
                                <i className="fa-brands fa-python text-yellow-500 text-3xl rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        Python
                                    </h4>
                                    <p className="text-sm">
                                        Data Science and Machine Learning
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <i className="fa-brands fa-js text-yellow-500 text-3xl rounded-sm float-left inline-block"></i>
                                <div className="pl-11">
                                    <h4 className="font-light text-yellow-600">
                                        JavaScript
                                    </h4>
                                    <p className="text-sm">
                                        Website Development
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
