
export class CatalogRoot {
    RootID: number;
    Value: string;
    Depth: number;

    constructor(RootID: number, Value: string, Depth: number) {
        this.RootID = RootID;
        this.Value = Value;
        this.Depth = Depth;
    }
}

export class CatalogNode {
    CatalogID: number;
    Value: string;
    ParentID: number;

    constructor(CatalogID: number, Value: string, ParentID: number) {
        this.CatalogID = CatalogID;
        this.Value = Value;
        this.ParentID = ParentID;
    }
}

export class GlobalCoupon {
    GlobalCouponID: number;
    FrameID: number;
    Name: string;
    Value: number;
    CreateAt: string;
    ExpireAt: string;
    Limit: number;
    CountUsed: number;

    constructor(GlobalCouponID: number, FrameID: number, Name: string, Value: number, CreateAt: string, ExpireAt: string, Limit: number, CountUsed: number) {
        this.GlobalCouponID = GlobalCouponID;
        this.FrameID = FrameID;
        this.Name = Name;
        this.Value = Value;
        this.CreateAt = CreateAt;
        this.ExpireAt = ExpireAt;
        this.Limit = Limit;
        this.CountUsed = CountUsed;
    }
}

export class FlashSale {
    FlashSaleID: number;
    CreateAt: string;
    ExpireAt: string;

    constructor(FlashSaleID: number, CreateAt: string, ExpireAt: string) {
        this.FlashSaleID = FlashSaleID;
        this.CreateAt = CreateAt;
        this.ExpireAt = ExpireAt;
    }
}

export class PersonalCoupon {
    PersonalCouponID: number;
    ProviderID: number;
    FrameID: number;
    Name: string;
    Value: number;
    CreateAt: string;
    ExpireAt: string;
    Limit: number;
    CountUsed: number;

    constructor(PersonalCouponID: number, ProviderID: number, FrameID: number, Name: string, Value: number, CreateAt: string, ExpireAt: string, Limit: number, CountUsed: number) {
        this.PersonalCouponID = PersonalCouponID;
        this.ProviderID = ProviderID;
        this.FrameID = FrameID;
        this.Name = Name;
        this.Value = Value;
        this.CreateAt = CreateAt;
        this.ExpireAt = ExpireAt;
        this.Limit = Limit;
        this.CountUsed = CountUsed;
    }
}