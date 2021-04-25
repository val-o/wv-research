import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import { ProfileScreen, RegistrationFlow } from "./modules/auth";
import { HomeScreen } from "./modules/home";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/auth">
            <IonLabel>Auth</IonLabel>
          </IonItem>
          <IonItem routerLink="/profile" routerDirection="forward">
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem routerLink="/home">
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem routerLink="/home">
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/auth">
          <RegistrationFlow />
        </Route>
        <Route exact path="/profile">
          <ProfileScreen />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        {/* <Route exact path="/home" component={HomeScreen}></Route> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
