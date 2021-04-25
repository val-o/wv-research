import React from "react";
import { Route, useHistory } from "react-router";
import { PhoneScreen } from "./PhoneScreen";
import { InfoScreen } from "./InfoScreen";
import { CodeScreen } from "./CodeScreen";
import { IonRouterOutlet } from "@ionic/react";

interface IProps {}
export const RegistrationFlow: React.FC<IProps> = (props) => {
  const {} = props;
  const { push } = useHistory();

  return (
    <>
      <IonRouterOutlet>
        <Route path="/auth" exact>
          <PhoneScreen onNext={() => push("/auth/info")} />
        </Route>
        <Route path="/auth/info" exact>
          <InfoScreen onNext={() => push("/auth/code")} />
        </Route>
        <Route path="/auth/code" exact>
          <CodeScreen onNext={() => push("/")} />
        </Route>
      </IonRouterOutlet>
    </>
  );
};
