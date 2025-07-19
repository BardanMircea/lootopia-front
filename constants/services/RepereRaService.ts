import Config from "react-native-config";
import { RepereRaRequest } from "../types/Request/RepereRaRequest";
import { RepereRaResponse } from "../types/Response/RepereRaResponse";

/**
 * Retrieves all repères for the authenticated user.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of RepereRaResponse objects.
 * @throws Will throw an error if the API response is not successful.
 */
export const getAll = async (token: string): Promise<RepereRaResponse[]> => {
    const response = await fetch(`${Config.API_URL}/reperes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        console.error("Error fetching all repères:", response.statusText);
        throw new Error(`Failed to fetch all participations: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves a repère by its ID.
 *
 * @param id - The ID of the repère to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to a RepereRaResponse object containing repère details.
 * @throws Will throw an error if the API response is not successful.
 */
export const getById = async (id: number, token: string): Promise<RepereRaResponse> => {
    const response = await fetch(`${Config.API_URL}/reperes/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        console.error("Error fetching repère by ID:", response.statusText);
        throw new Error(`Failed to fetch repère by ID: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Creates a new repère.
 *
 * @param repere - The repère request data, conforming to the RepereRaRequest type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to a RepereRaResponse object containing the created repère details.
 * @throws Will throw an error if the API response is not successful.
 */
export const create = async (repere: RepereRaRequest, token: string): Promise<RepereRaResponse> => {
    const response = await fetch(`${Config.API_URL}/reperes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(repere)
    });

    if (!response.ok) {
        console.error("Error creating repère:", response.statusText);
        throw new Error(`Failed to create repère: ${response.statusText}`);
    }

    return response.json();
}