import React, { useState, useEffect } from "react";
import Link from "next/link";

import { socialMedia } from "../vars/social_media";
import { links, formProps } from "../vars/footer";
import { submitQuestion } from "../services/index";

function Footer() {
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    function inputHandler(e) {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function validate(val) {
        const errors = {};

        // Validate name
        if (
            val.name.replace(/\s/g, "").length < 3 ||
            val.name.replace(/\s/g, "").length > 18
        ) {
            errors.name = true;
        }

        // Validate email
        const res = val.email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (!res) {
            errors.email = true;
        }

        // Validate message
        if (val.message.replace(/\s/g, "").length <= 20) {
            errors.message = true;
        }
        return errors;
    }

    function submitHandler(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            submitQuestion(formValues).then((res) => {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    setFormValues({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                }, 5000);
            });
        } else {
            console.log("fail");
        }
    }, [formErrors]);

    return (
        <footer className="bg-black text-white static bottom-0">
            <div className="max-w-5xl m-auto py-12 px-10">
                <div className="md:flex md:justify-between border-b pb-12 border-gray-400">
                    <div className="mb-3 md:mb-0">
                        <Link href="/">
                            <span className="cursor-pointer tracking-widest">
                                MAC
                                <span className="text-[10px] tracking-normal font-medium">
                                    .yves
                                </span>
                            </span>
                        </Link>
                    </div>

                    <ul className="flex flex-wrap gap-2 font-light text-xs md:text-sm">
                        {socialMedia.map((item, index) => (
                            <li key={index} className="cursor-pointer">
                                <a href={item.link} target="_blank">
                                    <span className="px-2 py-[2px] bg-yellow-600 hover:bg-yellow-700 ease duration-100">
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:mt-12 border-b border-gray-400 pb-12">
                    <ul className="text-sm my-12 md:my-0 md:border-0 pb-6 border-b border-gray-400 font-light flex flex-col gap-2">
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className="hover:text-gray-400 w-fit"
                            >
                                <Link href={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <form
                        action=""
                        className="md:border-l md:pl-12 md:border-gray-400"
                        id="contact"
                        onSubmit={submitHandler}
                    >
                        <h4 className="text-sm border-l-2 pl-2 mb-4">
                            Send me message
                        </h4>
                        {formProps.map((input, index) => {
                            if (input.type === "text") {
                                return (
                                    <div key={index} className="mb-4">
                                        <input
                                            value={formValues[`${input.name}`]}
                                            onChange={inputHandler}
                                            name={input.name}
                                            type="text"
                                            placeholder={input.placeholder}
                                            className="bg-black text-white border-b border-gray-400 w-full focus:outline-0 focus:bg-white focus:text-black p-1 text-sm"
                                        />
                                        {formErrors[`${input.name}`] && (
                                            <span className="text-xs text-rose-500">
                                                {input.errorMessage}
                                            </span>
                                        )}
                                    </div>
                                );
                            } else if (input.type === "textarea") {
                                return (
                                    <div key={index} className="mb-4">
                                        <label className="text-xs text-gray-400">
                                            {input.label}
                                        </label>
                                        <textarea
                                            value={formValues[`${input.name}`]}
                                            onChange={inputHandler}
                                            name={input.name}
                                            id=""
                                            cols="30"
                                            rows="6"
                                            className="text-sm focus:outline-0 border-2 focus:border-gray-400 p-1 font-sm w-full min-h-[100px] max-h-[200px] text-black"
                                        ></textarea>
                                        {formErrors[`${input.name}`] && (
                                            <span className="text-xs text-rose-500">
                                                {input.errorMessage}
                                            </span>
                                        )}
                                    </div>
                                );
                            }
                        })}
                        <button className="text-sm border py-1 px-4 hover:border-gray-400 hover:text-gray-400">
                            Submit
                        </button>
                        {isSuccess && (
                            <div className="text-sm mt-5 p-2 text-white bg-yellow-500">
                                Success
                            </div>
                        )}
                    </form>
                </div>
                <p className="text-[10px] text-center mt-12 text-gray-400">
                    Copyright &copy; Dylan Mac Yves - All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
