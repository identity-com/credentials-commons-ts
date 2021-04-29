import {
    GenericClaimModel, ProofDescription,
    SchemaIdentifier,
    SubjectIdentifier,
    VerifiableCredential, VerifiableCredentialId, VerifiableCredentialIssuer, VerifiableCredentialType
} from "../types/VerifiableCredentialsTypes";

export interface SubjectAttributes {
    id: SubjectIdentifier;
    claims: GenericClaimModel[];
}

export interface CredentialBlueprint {
    id?: VerifiableCredentialId;
    subjectAttributes: SubjectAttributes;
    credentialSubjectSchema: SchemaIdentifier;
    type: VerifiableCredentialType[];
    issuer: VerifiableCredentialIssuer;
    proofDescription?: ProofDescription;
}

export interface CredentialBuilderInterface {
    /**
     * Create a new instance of a partial VerifiableCredential.
     * If all requirements to create a fully VerifiableCredential are available than will return a full VC.
     */
    createVerifiableCredential(params: CredentialBlueprint): Partial<VerifiableCredential>;

    addProof(credential: Partial<VerifiableCredential>, proofDescription?:ProofDescription): VerifiableCredential;
}