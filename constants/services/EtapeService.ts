import Config from "react-native-config";
import { EtapeRequest } from "../types/Request/EtapeRequest";
import { EtapeResponse } from "../types/Response/EtapeResponse";

/**
 * Creates a new etape by sending a POST request to the API.
 *
 * @param etape - The etape data to be created, conforming to the EtapeRequest type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to the created EtapeResponse object.
 * @throws Will throw an error if the API response is not successful.
 */
export const createEtape = async (etape: EtapeRequest, token: string): Promise<EtapeResponse> => {
    const response = await fetch(`${Config.API_URL}/etapes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(etape),
    }); 

    if (!response.ok) {
        throw new Error(`Failed to create etape: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves all etapes for a specific chasse by its ID.
 *
 * @param chasseId - The ID of the chasse to retrieve etapes for.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of EtapeResponse objects.
 * @throws Will throw an error if the API response is not successful.
 */
export const listerParChasse = async (chasseId: number, token: string): Promise<EtapeResponse[]> => {
    const response = await fetch(`${Config.API_URL}/etapes/chasse/${chasseId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch etapes for chasse ${chasseId}: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves all etapes from the API.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of EtapeResponse objects.
 * @throws Will throw an error if the API response is not successful.
 */
export const getAll = async(token: string): Promise<EtapeResponse[]> => {
    const response = await fetch(`${Config.API_URL}/etapes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },  

    });

    if (!response.ok) {
        throw new Error(`Failed to fetch etapes: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves a specific etape by its ID.
 *
 * @param id - The ID of the etape to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an EtapeResponse object.
 * @throws Will throw an error if the API response is not successful.
 */
export const getById = async(id: number, token: string): Promise<EtapeResponse> => {
    const response = await fetch(`${Config.API_URL}/etapes/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch etape with id ${id}: ${response.statusText}`);
    }

    return response.json();
}