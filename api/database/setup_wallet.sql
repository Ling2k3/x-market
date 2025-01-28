create table Wallet
(
    WalletID  integer primary key autoincrement,
    AccountID integer not null
);
create table CryptoWallet
(
    CryptoWalletID integer primary key autoincrement
);
create table BankingWallet
(
    BankingWalletID integer primary key autoincrement
);

