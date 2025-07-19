import { RepereRaRequest } from "./RepereRaRequest";

/**
 * Type représentant une requête de création/modification d'une étape de chasse au trésor.
 */
export type EtapeRequest = {
    /** Identifiant de la chasse associée */
    chasseId: number;
    
    /** Ordre de l'étape dans la chasse */
    ordre: number;
    
    /** Consigne ou instruction pour cette étape */
    consigne: string;
    
    /** Passphrase pour valider l'étape (optionnel, uniquement si validation par passphrase) */
    passphrase?: string;
    
    /** Prix pour validation directe (optionnel) */
    prix_validation_directe?: number;
    
    /** Latitude de la cache (optionnel, uniquement si validation par cache) */
    latitudeCache?: number;
    
    /** Longitude de la cache (optionnel, uniquement si validation par cache) */
    longitudeCache?: number;
    
    /** Repère RA pour validation par repère (optionnel) */
    repereRa?: RepereRaRequest; // Remplacer 'any' par le type approprié si défini ailleurs
}