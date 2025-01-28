create table Product
(
    ProductID integer primary key autoincrement,
    AccountID integer not null ,
    CatalogID integer not null ,
    CreateAt datatime default (datatime('now'))
);
create table Image
(
    ProductID integer,
    Image blob,
    foreign key (ProductID) references Product(ProductID)
);
create table Detail
(
    ProductID integer,
    Name text,
    Description blob,
    foreign key (ProductID) references Product(ProductID)
);
create table Rating
(
    ProductID integer ,
    AccountID integer ,
    Content Text ,
    Score float check ( Score > 0 and Score < 5)

);
create table Policy
(
    ProductID integer ,
    Value integer
);
create table Promotion
(
    ProductID integer ,
    FrameID integer ,
    Value text
);
create table Flavor
(
    ProductID integer ,
    Name text ,
    Image blob ,
    Price float check ( Price >= 0 )
);
create table Inventory
(
    ProductID integer ,
    QuantityInStock integer ,
    QuantitySold integer ,
    Status integer ,
    DateAdded date default (date('now')),
    LastUpdated datetime ,
    foreign key (ProductID) references Product(ProductID)
);
