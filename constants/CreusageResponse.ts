/**
 * Type représentant la réponse à une tentative de creusage dans une chasse au trésor.
 */
export type CreusageResponse = {
    /** Indique si la tentative de creusage a réussi */
    success: boolean;
    
    /** Message d'information ou d'erreur */
    message: string;
    
    /** Gain en couronnes obtenu lors du creusage (optionnel) */
    gainCouronnes?: number;
    
    /** Nouveau solde du joueur après le creusage (optionnel) */
    nouvelleSoldeJoueur?: number;
    
    /** Distance d'erreur en mètres (optionnel) */
    distanceErreurM?: number;
}