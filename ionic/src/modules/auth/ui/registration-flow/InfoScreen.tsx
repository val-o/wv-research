import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { InfoFields } from "../../../../../../common-ui/auth";
import { delay } from "../../../../utils";

const required = (val: string) => !!val;

export const InfoScreen: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { control, handleSubmit, formState, watch } = useForm<InfoFields>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    mode: "all",
  });
  const history = useHistory();

  const handleSubmitInternal = async (values: InfoFields) => {
    console.log(values);
    await delay(400);
    history.push("/auth/code");
  };

  console.log(formState);
  // console.log(watch("firstName"));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Info</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Back" icon="buttonIcon" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(handleSubmitInternal)}>
          <IonItem>
            <IonLabel>First Name</IonLabel>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: true }}
              render={({ field }) => (
                <IonInput
                  placeholder="Enter Input"
                  {...field}
                  onBlur={field.onBlur}
                  onIonChange={(e) => field.onChange(e.detail.value)}
                ></IonInput>
              )}
            ></Controller>
          </IonItem>
          <IonItem>
            <IonLabel>First Name</IonLabel>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: true }}
              render={({ field }) => (
                <IonInput
                  placeholder="Enter Input"
                  {...field}
                  onBlur={field.onBlur}
                  onIonChange={(e) => field.onChange(e.detail.value)}
                ></IonInput>
              )}
            ></Controller>
          </IonItem>

          <div style={{ textAlign: "right", marginTop: 10 }}>
            <IonButton disabled={!formState.isValid} type="submit">
              Next
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};
