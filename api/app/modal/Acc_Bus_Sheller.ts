import type {Product} from "./Product.ts";

export enum AccountSubscription {
    SUPPLIER = 0,
    VENDOR = 1,
}

export class AccountSheller {
    Products: Product[];
    Subscription: AccountSubscription;
    SubscriptionCatalog: string[];
    Voucher: number[];

    constructor(Products: Product[], Subscription: AccountSubscription, SubscriptionCatalog: string[], Voucher: number[]) {
        this.Products = Products;
        this.Subscription = Subscription;
        this.SubscriptionCatalog = SubscriptionCatalog;
        this.Voucher = Voucher;
    }
}
export class Inventory {
    ProductID: number;
    QuantityInStock: number;
    QuantitySold: number;
    Status: number;
    DateAdded: string;
    LastUpdated: string;

    constructor(ProductID: number, QuantityInStock: number, QuantitySold: number, Status: number, DateAdded: string, LastUpdated: string) {
        this.ProductID = ProductID;
        this.QuantityInStock = QuantityInStock;
        this.QuantitySold = QuantitySold;
        this.Status = Status;
        this.DateAdded = DateAdded;
        this.LastUpdated = LastUpdated;
    }
   
}
