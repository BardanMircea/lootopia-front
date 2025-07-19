import Config from "react-native-config";
import { AuthRequest } from "../types/Request/AuthRequest";
import { RegistrationRequest } from "../types/Request/RegistrationRequest";
import { AuthResponse } from "../types/Response/AuthResponse";

/**
 * Authenticates a user by sending a POST request to the API.
 *
 * @param request - The authentication request data, conforming to the AuthRequest type.
 * @returns A promise that resolves to the AuthResponse object containing the access token.
 * @throws Will throw an error if the API response is not successful.
 */
export const register = async(request: RegistrationRequest): Promise<Response> => {
    const response = await fetch(`${Config.API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        })

    if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
    }

    return response;
}

/**
 * Activates a user account by sending a GET request to the API with the activation token.
 *
 * @param token - The activation token received during registration.
 * @returns A promise that resolves to the Response object.
 * @throws Will throw an error if the API response is not successful.
 */
export const activate = async(token: string): Promise<Response> => {
    const response = await fetch(`${Config.API_URL}/auth/activate?token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    if (!response.ok) {
        throw new Error(`Sign-in failed: ${response.statusText}`);
    }

    
    return response;
}

/**
 * Logs in a user by sending a POST request to the API.
 *
 * @param request - The login request data, conforming to the AuthRequest type.
 * @returns A promise that resolves to the AuthResponse object containing the access token.
 * @throws Will throw an error if the API response is not successful.
 */
export const login = async(request: AuthRequest): Promise<AuthResponse> => {
    const response = await fetch(`${Config.API_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error(`Sign-in failed: ${response.statusText}`);
    }

    const data: AuthResponse = await response.json();
    return data;
}