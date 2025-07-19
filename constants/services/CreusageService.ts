import Config from "react-native-config";
import { CreusageRequest } from "../types/Request/CreusageRequest";
import { CreusageResponse } from "../types/Response/CreusageResponse";

/**
 * Sends a creusage request to the API and returns the response.
 *
 * @param request - The creusage request data, conforming to the CreusageRequest type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to the CreusageResponse object.
 * @throws Will throw an error if the API response is not successful.
 */
export const creuser = async (request: CreusageRequest, token: string): Promise<CreusageResponse> => {
    const response = await fetch(`${Config.API_URL}/creusages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(request)
    }); 

    if (!response.ok) {
        throw new Error(`Failed to creuser: ${response.statusText} ${response.json()}`);
    }

    return response.json();
}


/**
 * Retrieves all creusages from the API.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of `CreusageResponse` objects.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getAll = async(token: string): Promise<CreusageResponse[]> => {
    return fetch(`${Config.API_URL}/creusages`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch creusages: ${response.statusText}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error fetching creusages:", error);
        throw error;
    });
}

/**
 * Retrieves a specific creusage by its ID.
 *
 * @param id - The ID of the creusage to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to a `CreusageResponse` object.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getById = async(id: number, token: string): Promise<CreusageResponse> => {
    return fetch(`${Config.API_URL}/creusages/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch creusage with id ${id}: ${response.statusText}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error(`Error fetching creusage with id ${id}:`, error);
        throw error;
    });
}