import Config from "react-native-config";
import { TransactionCourroneRequest } from "../types/Request/TransactionCouronneRequest";
import { TransactionCourroneResponse } from "../types/Response/TransactionCouronneResponse";

/**
 * Retrieves all transactions for the authenticated user.
 *
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to an array of TransactionCourroneResponse objects.
 * @throws Will throw an error if the API response is not successful.
 */
export const getAll = async (token: string): Promise<TransactionCourroneResponse[]> => {
    const response = await fetch(`${Config.API_URL}/transactions`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        console.error("Error fetching all participations:", response.statusText);
        throw new Error(`Failed to fetch all participations: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves a transaction by its ID.
 *
 * @param id - The ID of the transaction to retrieve.
 * @param token - The authentication token to be included in the request header.
 * @returns A promise that resolves to a TransactionCourroneResponse object containing transaction details.
 * @throws Will throw an error if the API response is not successful.
 */
export const getById = async (id: number, token: string): Promise<TransactionCourroneResponse> => {
    const response = await fetch(`${Config.API_URL}/transactions/${id}`, {
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
 * Creates a new transaction in a chasse.
 *
 * @param request - The transaction request data, conforming to the TransactionCourroneRequest type.
 * @param token - The authentication token to be included in the request headers.
 * @returns A promise that resolves to a TransactionCourroneResponse object containing the created transaction details.
 * @throws Will throw an error if the API response is not successful.
 */
export const createTransactionCouronne = async (request: TransactionCourroneRequest, token: string): Promise<TransactionCourroneResponse> => {
    const response = await fetch(`${Config.API_URL}/transactions`, {
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