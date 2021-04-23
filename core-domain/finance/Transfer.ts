import * as Account from "./Account";

export interface Transfer {
    fromAccount: Account.Account;
    toAccount: Account.Account;
}

