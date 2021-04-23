import * as Eq from "fp-ts/Eq";
import * as String from "fp-ts/string";

export interface Account {
    id: string;
}

export const eq: Eq.Eq<Account> = Eq.contramap((a: Account) => a.id)(String.Eq);
