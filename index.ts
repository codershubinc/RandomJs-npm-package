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
const getRandomUser = async () => {
    const ftc = await fetch("https://openapi.codershubinc.tech/v1.0/user")
    const data = await ftc.json()
    return console.log(data);

}

export default getRandomUser
