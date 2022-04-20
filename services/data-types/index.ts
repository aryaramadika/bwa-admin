export interface TherapistStaffTypes {
    _id: string;
    therapistName: string;
    therapistAge: number;
    thumbnail:string

}
export interface PriceDetailTypes {
    _id: string;
    treatmentType: string;
    price: number;

}
export interface LoginTypes {
    email: string;
    password: string;
}
export interface UserTypes {
    id: string;
    username: string;
    email: string;
    name: string;
    avatar:string;
}
export interface JWTPayloadTypes {
    patient: UserTypes;
    iat: number;
}

