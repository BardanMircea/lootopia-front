import Config from "react-native-config";
import { ParticipationRequest } from "../types/Request/ParticipationRequest";
import { BasicResponse } from "../types/Response/BasicResponse";
import { ParticipationResponse } from "../types/Response/ParticipationResponse";

/**
 * Cancels a participation in a chasse.
 *
 * @param chasseId - The ID of the chasse for which to cancel the participation.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to a BasicResponse object containing a message.
 * @throws Will throw an error if the API response is not successful.
 */
export const cancelParticipation = async (chasseId: number, token: string): Promise<BasicResponse> => {
    const response = await fetch(`${Config.API_URL}/participations/${chasseId}/annuler`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorBody = await response.json(); // This is the body sent by .body(someObject)
        throw new Error(`Failed to cancel participation: ${errorBody.message}`);
    }

    return response.json();
}

/**
 * Retrieves all participations for the authenticated user.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of ParticipationResponse objects.
 * @throws Will throw an error if the API response is not successful.
 */
export const getMyParticipations  = async (token: string): Promise<ParticipationResponse[]> => {
    const response = await fetch(`${Config.API_URL}/participations/moi`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`Failed to fetch participations: ${errorBody}`);
    }

    return response.json();
}

/**
 * Participates in a chasse by sending a participation request.
 *
 * @param request - The participation request data, conforming to the ParticipationRequest type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to the ParticipationResponse object containing participation details.
 * @throws Will throw an error if the API response is not successful.
 */
export const participate = async (request: ParticipationRequest, token: string): Promise<ParticipationResponse> => {
    const response = await fetch(`${Config.API_URL}/participations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(request)
    });

    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`Failed to participate in chasse: ${errorBody}`);
    }

    return response.json();
}

/**
 * Retrieves all participations from the API.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of ParticipationResponse objects.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getAll = async (token: string): Promise<ParticipationResponse[]> => {
    const response = await fetch(`${Config.API_URL}/participations`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`Failed to fetch all participations: ${errorBody}`);
    }

    return response.json();
}

/**
 * Retrieves a specific participation by its ID.
 *
 * @param id - The ID of the participation to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to a ParticipationResponse object.
 * @throws Will throw an error if the fetch request fails or the response is not OK.
 */
export const getById = async (id: number, token: string): Promise<ParticipationResponse> => {
    const response = await fetch(`${Config.API_URL}/participations/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch participation by ID: ${response.statusText}`);
    }

    return response.json();
}