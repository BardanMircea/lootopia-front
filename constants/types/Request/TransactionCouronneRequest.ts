export type TransactionCourroneRequest = 
{
    /** Currency of the transaction */
    commentaire: string; // Comment or description of the transaction
    
    /** Type of operation, either debit or credit */
    typeOperation: "DEBIT" | "CREDIT"; 
}