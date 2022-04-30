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
export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}
export interface PaymentDetailTypes {
    bankId: string;
    type: string;
    bankName: string;
    banks: BanksTypes[];


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
export interface BookTypes {
    treatment : string,
    payment : string,
    bank : string,
    accountUser : string,
    name:  string,
    // address :string,
    phoneNumber: string,
    // gender: string,
    // age: number,
    lementation:string
}
export interface HistoryTreatmentTypes{
    name: string,
    lementation:string,
    phoneNumber:string,
    price:number,
    treatmentType:string

}
export interface HistoryPaymentTypes {
    bankName: string;
    name: string;
    noRekening: string;
    type: string;
}
export interface HistoryTransactionTypes {
    _id: string;
    historyTreatment: HistoryTreatmentTypes;
    value: number;
    status: string;
    accountUser: string;
    tax: number;
    name: string;
    historyPayment: HistoryPaymentTypes;
}
