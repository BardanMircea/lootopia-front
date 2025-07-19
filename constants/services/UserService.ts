import Config from "react-native-config";
import { UserResponse } from "../types/Response/UserResponse";

export const getByEmail = async (email: string, token: string): Promise<UserResponse> => {
    const response = await fetch(`${Config.API_URL}/utilisateurs?email=${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        console.error("Error fetching user by email:", response.statusText);
        throw new Error(`Failed to fetch user by email: ${response.statusText}`);
    }

    return response.json();
}