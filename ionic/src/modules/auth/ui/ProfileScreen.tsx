import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import * as React from "react";

function doRefresh(event: CustomEvent<any>) {
  console.log("Begin async operation");

  setTimeout(() => {
    console.log("Async operation has ended");
    event.detail.complete();
  }, 2000);
}

export const ProfileScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Back" icon="buttonIcon" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRefresher
          slot="fixed"
          onIonRefresh={doRefresh}
          pullFactor={0.5}
          pullMin={100}
          pullMax={200}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure
        nesciunt odio beatae assumenda! Molestiae mollitia, esse, tempore,
        laudantium itaque laborum exercitationem porro veniam corporis eaque
        ipsum in. Nemo, pariatur.
      </IonContent>
    </IonPage>
  );
};
