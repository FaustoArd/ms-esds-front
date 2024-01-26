import { Address } from "./address";

export class Customer{
    id!:number;
    name!:string;
    socialName!:string;
    type!:string;
    cuit!:string;
    email!:string;
    phone!:string;
    address!:Address;
}