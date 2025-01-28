create table Account
(
    AccountID integer primary key autoincrement,
    CreateAt  datetime default (datetime('now')),
    IsLooked    bit
);
create table Detail
(
    AccountID integer,
    Name text,
    Avatar blob,
    BirthDay date,
    Introduction blob,
    foreign key (AccountID) references Account(AccountID)
);
create table Interface
(
    AccountID integer ,
    Frame blob,
    foreign key (AccountID) references Account(AccountID)
);
create table Profile
(
    AccountID integer
);
create table Voucher
(
    AccountID integer ,
    VoucherID integer
);