import * as AuthState from "./AuthState";
import * as User from "./User";
import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/TaskEither";
import * as T from "fp-ts/Task";
import * as E from "fp-ts/Either";
import { RemoteError } from "../infra/error";

export interface LogInArgs {
  phoneNumber: string;
  code: string;
}

export const logIn = (
  args: LogInArgs
): TE.TaskEither<RemoteError, AuthState.LoggedIn> =>
  pipe(
    TE.right(
      AuthState.makeLoggedInState({
        token: "token",
        user: User.make({
          firstName: "Ivan",
          lastName: "Ivanov",
          id: "userid",
          phoneNumber: args.phoneNumber,
        }),
      })
    ),
    T.delay(300)
  );


  