export type TransactionCourroneResponse = 
{
    /** Unique identifier for the transaction */
    id: number;
    
    /** Amount of the transaction */
    montant: number; 
    
    /** Currency of the transaction */
    commentaire: string; // Comment or description of the transaction
    
    /** Date of the transaction */
    dateMouvement: string; // Date of the transaction in ISO 8601 format
    
    /** Type of operation, either debit or credit */
    typeOperation: "DEBIT" | "CREDIT"; 
    
    /** User id */
    userId: number;
}