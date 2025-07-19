import { EtapeResponse } from "./EtapeResponse";

/**
 * Type représentant la réponse d'une chasse au trésor.
 */
export type ChasseResponse = {
    
    /** Identifiant unique de la chasse */
    id: number;
    
    /** Titre de la chasse */
    titre: string;
    
    /** Description de la chasse */
    description: string;
    
    /** Type de monde : "CARTOGRAPHIQUE" ou "REEL" */
    monde: "CARTOGRAPHIQUE" | "REEL";
    
    /** Visibilité de la chasse : "PUBLIC" ou "PRIVE" */
    visibilite: "PUBLIC" | "PRIVE";
    
    /** Pseudo de l’organisateur */
    createur: string;
    
    /** Date de début de la chasse (format ISO 8601) */
    dateDebut: string;
    
    /** Date de fin de la chasse (format ISO 8601) */
    dateFin: string;
    
    /** Nombre d'étapes dans la chasse */
    nombreEtapes: number;
    
    /** Nombre de participants à la chasse */
    nombreParticipants: number;
    
    /** Montant de la récompense */
    montantRecompense: number;
    
    /** Liste des étapes de la chasse */
    etapes: EtapeResponse[];
    
    /** Frais de participation */
    fraisParticipation: number;
}