export type UserResponse = {
    /** Unique identifier for the user */
    id: number;

    /** Username of the user */
    pseudo: string;

    /** Email address of the user */
    email: string;

    /** Date when the user was created (ISO 8601 format) */
    dateCreation: string;

    /** Indique si utilisateur est partenaire */
    isPartenaire: boolean;

    /** Indique si l'utilisateur a activé l'authentification à deux facteurs */
    mfaActive: boolean;

    /** Balance */
    soldeCouronnes: number;

    /** Role */
    role: "USER" | "ADMIN" | "PARTENAIRE";
}