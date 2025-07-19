/**
 * Représente une étape d'une chasse au trésor.
 */
export type EtapeResponse = {
    /** Ordre de l'étape dans la chasse */
    ordre: number;
    
    /** Consigne ou instruction pour cette étape */
    consigne: string;
    
    /** Latitude de la cache pour cette étape */
    latitudeCache: number;
    
    /** Longitude de la cache pour cette étape */
    longitudeCache: number;
    
    /** Passphrase à trouver ou à utiliser pour valider l'étape */
    passphrase: string;
}