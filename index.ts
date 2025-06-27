/**
 * Returns a random integer between min and max (inclusive).
 * @param min - The minimum integer value (default: 0)
 * @param max - The maximum integer value (default: 100)
 * @returns A random integer between min and max
 */
export function getRandomNumber(min?: number, max?: number): number {
    return Math.floor(Math.random() * ((max ?? 100) - (min ?? 0) + 1)) + (min ?? 0);
}

export default getRandomNumber
