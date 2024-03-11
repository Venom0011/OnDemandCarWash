export interface payment{
    cardHolderName: string,
    cardType: string,
    cardNumber: string,
    paymentStatus: string,
    userId:number, 
    totalAmount: string,
    user:{
        email:string,
        address:string,
    }
}