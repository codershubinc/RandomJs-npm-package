/**
 * Fetches a random user from the CodersHub API.
 * @returns A promise that resolves to a RandomUserResponse object containing user and address info.
 *
 * Example response:
 * {
 *   statusCode: 200,
 *   data: {
 *     user: { ... },
 *     address: { ... },
 *     document_id: "..."
 *   },
 *   message: "Successfully fetched user info",
 *   success: true
 * }
 */

import type { RandomUserResponse } from "./index.d";

const getRandomUser = async (): Promise<RandomUserResponse> => {
    const ftc = await fetch("https://openapi.codershubinc.tech/v1.0/user");
    const data: RandomUserResponse = await ftc.json();
    return data;
};

export default getRandomUser
