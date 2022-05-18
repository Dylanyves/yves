import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    MainSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    FAQSection,
} from "../components/index";

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <React.Fragment>
            <div>
                <Head>
                    <title>Dylan Yves</title>
                </Head>
            </div>

            <MainSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <FAQSection />

            <Script
                src="https://kit.fontawesome.com/3a2c4276ec.js"
                crossOrigin="anonymous"
            />
        </React.Fragment>
    );
}
