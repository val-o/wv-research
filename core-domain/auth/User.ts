import * as Eq from "fp-ts/Eq";
import * as String from "fp-ts/string";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
type PhoneNumber = string & { _brand: "PhoneNumber" };

export const make = (u: User): User => u;

export const eq = Eq.contramap((u: User) => u.id)(String.Eq);
