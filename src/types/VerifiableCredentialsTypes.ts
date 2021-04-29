import {isoDateStr} from "./commonTypes";

export interface ProofDescription {
    type: string;
    proofPurpose: string;
    verificationMethod: string;
}


export interface VerifiableCredentialOptions {
    id?: string;
    type: string[];
}

export interface GenericClaimModel {
    getClaimPath(): string;
    getClaimStringValue(): string;
}

export type VerifiableCredentialId = string;
export type VerifiableCredentialType = string;
export type VerifiableCredentialIssuer = string;
// TODO this will be a dynamic type based on the crendential schemas
export type CredentialSubject = any;

export interface VerifiableCredentialProof extends ProofDescription {
    created: isoDateStr;
    //[string:any]  TODO how to define a dynamic property to accommodate any proof signature structure
}
/**
 * Defines an object instance compatible with the W3C Verifiable Credential Data Model
 * https://www.w3.org/TR/vc-data-model
 */
export interface VerifiableCredential {
    id: VerifiableCredentialId;
    type: VerifiableCredentialType[];
    issuer: VerifiableCredentialIssuer;
    issuanceDate: isoDateStr;
    credentialSubject: CredentialSubject | null;
    proof: VerifiableCredential | null;
}


/**
 * An unique schema identifier to load a credential schema from cache or a remote repo
 */
export type SchemaIdentifier = string;

/**
 * An unique subject identifier like a publicKey or a DID
 */
export type SubjectIdentifier = string;

export interface CredentialSubjectBuilder {
    buildSubjectModel(claims:GenericClaimModel[], schema:SchemaIdentifier, id?:SubjectIdentifier): CredentialSubject;
}

export interface ProofBuilder {
    buildCredentialProof(credential:VerifiableCredential, requiredProof: ProofDescription): VerifiableCredential;
}
