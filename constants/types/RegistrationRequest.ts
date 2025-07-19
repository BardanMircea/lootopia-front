/**
 * Type représentant une requête d'inscription d'utilisateur.
 */
export type RegistrationRequest = {
    /** Adresse email de l'utilisateur */
    email: string;
    
    /** Pseudo de l'utilisateur */
    pseudo: string;
    
    /** Mot de passe de l'utilisateur */
    motDePasse: string;
    
    /** Consentement RGPD */
    rgpdConsent: boolean;
}