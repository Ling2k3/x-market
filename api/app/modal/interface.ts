import type Buffer from "node:buffer";


// Developing the following interfaces

export interface Banking {
    OnlinePaymentID: number;
}

export interface Wallet {
    WalletPaymentID: number;
}

export interface Crypto {
    CryptoPaymentID: number;
}

export interface Manual {
    ManualPaymentID: number;
}

export interface WalletAccount {
    WalletID: number;
    AccountID: number;
}

export interface CryptoWallet {
    CryptoWalletID: number;
}

export interface BankingWallet {
    BankingWalletID: number;
}
