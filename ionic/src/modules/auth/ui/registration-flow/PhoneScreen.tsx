import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { delay } from "../../../../utils";

interface Fields {
  phone: string;
}

export const PhoneScreen: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const { control, handleSubmit, formState, watch } = useForm<Fields>({
    defaultValues: {
      phone: "",
    },
    mode: "all",
  });
  const history = useHistory();

  const handleSubmitInternal = async (values: Fields) => {
    console.log(values);
    await delay(400);
    history.push("/auth/info");
  };

  console.log(formState);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Phone</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="Back" icon="buttonIcon" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(handleSubmitInternal)}>
          <IonItem>
            <IonLabel>Phone</IonLabel>
            <Controller
              control={control}
              name="phone"
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
