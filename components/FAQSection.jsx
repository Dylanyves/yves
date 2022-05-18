import React, { useState, useEffect } from "react";
const { v4: uuidv4 } = require("uuid");
import { getFAQs } from "../services/index";

function FAQSection() {
    const [selected, setSelected] = useState(null);
    const [faqs, setFaqs] = useState(null);

    useEffect(() => {
        fetch(
            getFAQs()
                .then((res) => {
                    if (res.faqs) {
                        setFaqs(res.faqs[0].faqs.raw.children);
                    }
                    throw Error("Error during fetching the data");
                })
                .catch((err) => {
                    console.log(err.message);
                })
        );
    }, []);

    function toggle(i) {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    }

    const NUMBERED_LIST = "numbered-list";
    const LIST_ITEM = "list-item";

    function getContent(item, type, index) {
        function getContentFragment(child, childIndex) {
            if (child.text && !child.bold) {
                return (
                    <div
                        key={uuidv4()}
                        className="flex justify-between items-center"
                    >
                        <h4 className="">{child.text}</h4>
                        {selected !== index && (
                            <i className="fa-solid fa-plus"></i>
                        )}
                        {selected == index && (
                            <i className="fa-solid fa-minus"></i>
                        )}
                    </div>
                );
            } else if (child.text && child.bold) {
                return (
                    <div
                        key={uuidv4()}
                        className={`ease duration-500 overflow-hidden ${
                            selected === index ? "max-h-[300px] " : "max-h-0"
                        }`}
                    >
                        <p className="text-sm">{child.text}</p>
                    </div>
                );
            }
        }

        switch (type) {
            case NUMBERED_LIST:
                return (
                    <React.Fragment key={uuidv4()}>
                        {item.children.map((child, index) =>
                            getContent(child, child.type, index)
                        )}
                    </React.Fragment>
                );
            case LIST_ITEM:
                return (
                    <div
                        key={uuidv4()}
                        onClick={() => toggle(index)}
                        className={`ease duration-500 hover:shadow-md ${
                            selected === index ? "bg-black text-white" : ""
                        } border-black p-2 cursor-pointer border`}
                    >
                        {item.children[0].children.map((child, index) =>
                            getContentFragment(child, index)
                        )}
                    </div>
                );
        }
    }
    return (
        <section className="">
            <div data-aos="zoom-in" className="max-w-5xl m-auto py-32 px-10 ">
                <div>
                    <h2 className="mb-5 text-xl md:text-2xl xl:text-3xl border-black">
                        FAQs
                    </h2>

                    <div className="flex flex-col gap-y-4">
                        {faqs &&
                            faqs.map((faq) => {
                                return (
                                    <React.Fragment key={uuidv4()}>
                                        {getContent(faq, faq.type)}
                                    </React.Fragment>
                                );
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
