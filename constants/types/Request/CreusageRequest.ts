/**
 * Type représentant une requête de creusage dans une chasse au trésor.
 */
export type CreusageRequest = {
    
    /** Identifiant de la chasse */
    chasseId: number;
    
    /** Latitude de la tentative de creusage */
    latitude: number;
    
    /** Longitude de la tentative de creusage */
    longitude: number;
}