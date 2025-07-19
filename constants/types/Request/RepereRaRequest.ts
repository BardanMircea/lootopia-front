/**
 * Type représentant un repère RA associé à une étape de chasse au trésor.
 */
export type RepereRaRequest = {

    /** Nom du repère */
    nom: string;
    
    /** Identifiant de la chasse associée */
    chasseId: number; 
}