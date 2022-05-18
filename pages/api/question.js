// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function question(req, res) {
    const gqlClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphcmsToken}`,
        },
    });

    const query = gql`
        mutation CREATEQuestion(
            $name: String!
            $email: String!
            $subject: String!
            $message: String!
        ) {
            createQuestion(
                data: {
                    name: $name
                    email: $email
                    subject: $subject
                    question: $message
                }
            ) {
                id
            }
        }
    `;
    try {
        const result = await gqlClient.request(query, req.body);
        return res.status(200).send(result);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send(err);
    }
}
