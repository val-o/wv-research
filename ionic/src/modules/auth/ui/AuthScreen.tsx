import { IonPage, IonHeader, IonToolbar, IonContent, IonTitle } from "@ionic/react";
import * as React from "react";

export const AuthScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Hello World</IonContent>
    </IonPage>
  );
};
