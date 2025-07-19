/**
 * Type représentant un repère RA associé à une étape de chasse au trésor.
 */
export type RepereRa = {
    /** Identifiant unique du repère */
    id: number;
    
    /** Nom du repère */
    nom: string;
    
    /** URL ou chemin de l'image du marker */
    imageMarker: string;
    
    /** Identifiant de l'étape associée (optionnel, selon le besoin) */
    etapeId?: number;
}