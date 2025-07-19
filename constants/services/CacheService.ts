import Config from "react-native-config";

/**
 * Retrieves all caches from the API.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to the Response object containing the caches.
 * @throws Will throw an error if the API response is not successful.
 */
export const getAllCaches = async(token: string): Promise<Response> => {
    const response = await fetch(`${Config.API_URL}/caches`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch caches: ${response.statusText}`);
    }

    return response;
}