import Config from "react-native-config";
import { ChasseResponse } from "../types/Response/ChasseResponse";

/**
 * Retrieves all chasses from the API.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of `ChasseResponse` objects.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getAllChasses = async (token: string): Promise<ChasseResponse[]> => {
    const response = await fetch(`${Config.API_URL}/chasses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch chasses: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves a specific chasse by its ID.
 *
 * @param id - The ID of the chasse to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to a `ChasseResponse` object.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getChasseById = async (id: number, token: string): Promise<ChasseResponse> => {
    const response = await fetch(`${Config.API_URL}/chasses/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch chasse with id ${id}: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Creates a new chasse by sending a POST request to the API.
 *
 * @param chasse - The chasse data to be created, conforming to the ChasseResponse type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to the created ChasseResponse object.
 * @throws Will throw an error if the API response is not successful.
 */
export const createChasse = async (chasse: ChasseResponse, token: string): Promise<ChasseResponse> => {
    const response = await fetch(`${Config.API_URL}/chasses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(chasse),
    });

    if (!response.ok) {
        throw new Error(`Failed to create chasse: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves the user's chasses.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of `ChasseResponse` objects.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getMyChasses = async (token: string): Promise<ChasseResponse[]> => {
    const response = await fetch(`${Config.API_URL}/chasses/mes-chasses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch my chasses: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves public and active chasses with pagination.
 *
 * @param page - The page number for pagination.
 * @param size - The number of items per page.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of `ChasseResponse` objects.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getChassesPublicEtActives = async (page: number, size: number, token: string): Promise<ChasseResponse[]> => {
    const response = await fetch(`${Config.API_URL}/chasses/public?page=${page}&size=${size}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch public and active chasses: ${response.statusText}`);
    }

    return response.json();
}