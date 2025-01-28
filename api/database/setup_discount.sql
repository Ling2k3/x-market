create table GlobalCoupon
(
    GlobalCouponID integer primary key autoincrement,
    FrameID integer not null ,
    Name text ,
    Value float check ( Value > 0 and Value < 1 ) ,
    CreateAt datetime default (datetime('now')) ,
    ExpireAt datetime not null ,
    Max integer ,
    CountUsed integer
);
create table FlashSale
(
    FlashSaleID integer primary key autoincrement ,
    CreateAt datetime default (datetime('now')) ,
    ExpireAt datetime default (datetime('now'))
);
create table PersonalCoupon
(
    PersonalCouponID integer primary key autoincrement ,
    ProviderID integer not null ,
    FrameID integer ,
    Name text ,
    Value float check ( Value > 0 and value < 1 ) ,
    CreateAt datetime default (datetime('now')) ,
    ExpireAt datetime default (datetime('now')) ,
    Max integer ,
    CountUsed integer
);
