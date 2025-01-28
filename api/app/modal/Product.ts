import type  Buffer from "node:buffer";
import type { Inventory } from "./Acc_Bus_Sheller.ts";

export class Product {
    ProductID: number;
    AccountID: number;
    CatalogID: number;
    CreateAt: string;
    Image: Buffer;
    Name: string;
    Description: Buffer;
    Ratings: Rating[];
    Policies: number[];
    Promotions: Promotion[];
    Flavors: Flavor[];
    Inventory: Inventory;
    Catalogs: string[];

    constructor(ProductID: number, AccountID: number, CatalogID: number, CreateAt: string, Image: Buffer, Name: string, Description: Buffer, Ratings: Rating[], Policies: number[], Promotions: Promotion[], Flavors: Flavor[], Inventory: Inventory, Catalogs: string[]) {
        this.ProductID = ProductID;
        this.AccountID = AccountID;
        this.CatalogID = CatalogID;
        this.CreateAt = CreateAt;
        this.Image = Image;
        this.Name = Name;
        this.Description = Description;
        this.Ratings = Ratings;
        this.Policies = Policies;
        this.Promotions = Promotions;
        this.Flavors = Flavors;
        this.Inventory = Inventory;
        this.Catalogs = Catalogs;
    }
}
export class Rating {
    AccountID: number;
    Content: string;
    Score: number;

    constructor(AccountID: number, Content: string, Score: number) {
        this.AccountID = AccountID;
        this.Content = Content;
        this.Score = Score;
    }
}

export class Promotion {
    FrameID: number;
    Value: string;

    constructor(FrameID: number, Value: string) {
        this.FrameID = FrameID;
        this.Value = Value;
    }
}

export class Flavor {
    Name: string;
    Image: Buffer;
    Price: number;

    constructor(Name: string, Image: Buffer, Price: number) {
        this.Name = Name;
        this.Image = Image;
        this.Price = Price;
    }
}


