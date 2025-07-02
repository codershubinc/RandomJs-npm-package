/**
 * Returns a random integer between min and max (inclusive).
 * @param min - The minimum integer value (default: 0)
 * @param max - The maximum integer value (default: 100)
 * @returns A random integer between min and max
/**
 * User object returned by the API
 */
export interface RandomUser {
    name: Record<string, unknown>;
    id: string;
    password: string;
    prefs: Record<string, unknown>;
    avatar: Record<string, unknown>;
}

export interface RandomUserAddress {
    city: string;
    co_ordinates: Record<string, unknown>;
    state: string;
    post_code: number;
    time_zone: Record<string, unknown>;
    street: Record<string, unknown>;
    country: Record<string, unknown>;
}

export interface RandomUserData {
    user: RandomUser;
    address: RandomUserAddress;
    document_id: string;
}

export interface RandomUserResponse {
    statusCode: number;
    data: RandomUserData;
    message: string;
    success: boolean;
}

/**
 * Fetches a random user from the CodersHub API and logs the result.
 * @returns Promise<RandomUserResponse>
 */
declare const getRandomUser: () => Promise<RandomUserResponse>;

export default getRandomUser;
