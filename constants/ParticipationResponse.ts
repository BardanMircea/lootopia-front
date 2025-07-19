/**
 * Type représentant la réponse à une participation à une chasse au trésor.
 */
export type ParticipationResponse = {
    /** Identifiant unique de la participation */
    id: number;
    
    /** Identifiant de la chasse */
    chasseId: number;
    
    /** Titre de la chasse */
    titreChasse: string;
    
    /** Liste des participants */
    participants: string[];
    
    /** Date d'inscription (format ISO 8601) */
    inscritDepuis: string;
    
    /** Numéro de l'étape courante */
    etapeCourante: number;
    
    /** Indique si le joueur est éligible au creusage */
    eligibleCreusage: boolean;
}