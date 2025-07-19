// constants/types/Response/ProgressionResponse.ts
export type ProgressionRequest = {
    
    /** Identifiant unique de la progression */
    id: number;

    /** Identifiant de la chasse associée */
    chasseId: number;
    
    /** Identifiant de l'étape associée */
    etapeId: number;
    
    /** Identifiant du participant */
    participantId: number;
    
    /** Date de début de la progression (format ISO 8601) */
    dateValidation: string;  

    /** Indique si la progression est valide */
    isValide: boolean;
}