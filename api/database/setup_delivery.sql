create table Ord
(
    OrdID     integer primary key autoincrement,
    AccountID integer not null,
    ProductID integer not null ,
    CreateAt  datetime default (datetime('now')) ,
    TotalAmount float
);
create table Shipping
(
    OrdID integer ,
    CourierID integer ,
    TransportID integer ,
    Status integer check(Status in (1, 2, 3, 4)) ,
    LocationUser text ,
    LocationShop text ,
    foreign key (OrdID) references Ord(OrdID) ,
    foreign key (CourierID ) references Courier(CourierID) ,
    foreign key (TransportID) references Transport(TransportID)
);
create table Transport
(
    TransID integer primary key autoincrement,
    OrdID   integer not null ,
    Target text ,
    CurrentLocation text
);
create table Courier
(
    CourierID integer primary key autoincrement ,
    Description text ,
    Name text ,
    Logo blob
);
