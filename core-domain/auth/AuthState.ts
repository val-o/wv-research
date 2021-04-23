import { Refinement } from "fp-ts/lib/function";
import * as User from "./User";

export interface Registered {
  _tag: "Registered";
  phoneNumber: string;
}

export interface LoggedIn {
  _tag: "LoggedIn";
  user: User.User;
  token: string;
}

export type State = LoggedIn | Registered;

//#region Constructors

export const makeLoggedInState = (st: Omit<LoggedIn, "_tag">): LoggedIn => ({
  _tag: "LoggedIn",
  ...st,
});

//#endregion

//#region Refinements

export const isRegistered: Refinement<State, Registered> = (
  s
): s is Registered => s._tag === "Registered";

export const isLoggedIn: Refinement<State, LoggedIn> = (s): s is LoggedIn =>
  s._tag === "LoggedIn";

//#endregion

//#region Reducers

//#endregion
