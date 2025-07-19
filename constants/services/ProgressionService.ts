import Config from "react-native-config";
import { ProgressionRequest } from "../types/Request/ProgressionRequest";
import { ProgressionResponse } from "../types/Response/ProgressionResponse";

/**
 * Retrieves all participations for the authenticated user.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of ProgressionResponse objects.
 * @throws Will throw an error if the API response is not successful.
 */
export const getAll = async (token: string): Promise<ProgressionResponse[]> => {
    const response = await fetch(`${Config.API_URL}/participations`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorBody = await response.json();
        console.error("Error fetching all participations:", errorBody);
        throw new Error(`Failed to fetch all participations: ${errorBody}`);
    }

    return response.json();
}

/**
 * Retrieves a participation by its ID.
 *
 * @param id - The ID of the participation to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to a ProgressionResponse object containing participation details.
 * @throws Will throw an error if the API response is not successful.
 */
export const getById = async (id: number, token: string): Promise<ProgressionResponse> => {
    const response = await fetch(`${Config.API_URL}/participations/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        console.error("Error fetching participation by ID:", response.statusText);
        throw new Error(`Failed to fetch participation by ID: ${response.statusText}`);
    }

    return response.json();
}


/**
 * Creates a new participation in a chasse.
 *
 * @param request - The participation request data, conforming to the ProgressionRequest type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to the ProgressionResponse object containing participation details.
 * @throws Will throw an error if the API response is not successful.
 */
export const create = async (request: ProgressionRequest, token: string): Promise<ProgressionResponse> => {
    const response = await fetch(`${Config.API_URL}/participations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(request)
    });

    if (!response.ok) {
        console.error("Error creating participation:", response.statusText);
        throw new Error(`Failed to create participation: ${response.statusText}`);
    }

    return response.json();
}