import type Buffer from "node:buffer";

export class AccountBuyer {
    Orders: Ord[];
    Voucher: number[];

    constructor(Orders: Ord[], Voucher: number[]) {
        this.Orders = Orders;
        this.Voucher = Voucher;
    }
}

export class Ord {
    OrdID: number;
    AccountID: number;
    ProductID: number;
    CreateAt: string;
    TotalAmount: number;
    Shipping: Shipping;
    Transport: Transport;
    Courier: Courier;


    constructor(OrdID: number, AccountID: number, ProductID: number, CreateAt: string, TotalAmount: number, Shipping: Shipping, Transport: Transport, Courier: Courier) {
        this.OrdID = OrdID;
        this.AccountID = AccountID;
        this.ProductID = ProductID;
        this.CreateAt = CreateAt;
        this.TotalAmount = TotalAmount;
        this.Shipping = Shipping;
        this.Transport = Transport;
        this.Courier = Courier;
    }
}

export interface Shipping {
    Status: number;
    LocationUser: string;
    LocationShop: string;
}

export interface Transport {
    TransID: number;
    Target: string;
    CurrentLocation: string;
}
export interface Courier {
    CourierID: number;
    Description: string;
    Name: string;
    Logo: Buffer;
}