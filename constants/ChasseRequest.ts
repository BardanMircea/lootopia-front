/**
 * Type représentant une requête de création de chasse au trésor.
 */
export type ChasseRequest = {
    /** Titre de la chasse */
    titre: string;
    
    /** Description de la chasse */
    description: string;
    
    /** Latitude de la cache */
    latitudeCache: number;
    
    /** Longitude de la cache */
    longitudeCache: number;
    
    /** Type de monde : "CARTOGRAPHIQUE" ou "REEL" */
    typeMonde: "CARTOGRAPHIQUE" | "REEL";
    
    /** Message affiché lorsque la cache est trouvée (optionnel) */
    messageCacheTrouve?: string;
    
    /** Frais de participation (optionnel) */
    fraisParticipation?: number;
    
    /** Type de récompense, uniquement "COURONNES" pour le MVP (optionnel) */
    typeRecompense?: "COURONNES";
    
    /** Montant de la récompense, 100.0 par défaut pour le MVP (optionnel) */
    montantRecompense?: number;
    
    /** Visibilité de la chasse : "PUBLIC" ou "PRIVE", "PUBLIC" par défaut pour le MVP (optionnel) */
    visibilite?: "PUBLIC" | "PRIVE";
}