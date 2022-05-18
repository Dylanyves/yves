import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getFAQs = async () => {
    const query = gql`
        query MyQuery {
            faqs(last: 1) {
                faqs {
                    raw
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result;
};

export const getAboutDescription = async () => {
    const query = gql`
        query MyQuery {
            aboutMes(first: 1) {
                description
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result;
};

export const getLatestWorks = async () => {
    const query = gql`
        query MyQuery {
            portfolioProjects(last: 3) {
                projectName
                projectLink
                projectDescription
                id
                projectImage {
                    url
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result;
};

export const getWorks = async () => {
    const query = gql`
        query MyQuery {
            portfolioProjects {
                projectName
                projectLink
                projectDescription
                id
                projectImage {
                    url
                }
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result;
};

export const submitQuestion = async (obj) => {
    const result = await fetch("/api/question", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    });
    return result.json();
};

export const getExternalLinks = async () => {
    const query = gql`
        query MyQuery {
            externalLinks {
                name
                link
                id
                display
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result;
};
