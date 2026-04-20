import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";


const Page2: React.FC = () =>{

return (

       <IonPage>
         <IonHeader>
         <IonToolbar>
          <IonTitle>Page2</IonTitle>
         </IonToolbar>
         <IonContent className="Ion-Padding">
          <IonButton expand="full">Page2
          </IonButton>
         </IonContent>
         </IonHeader>
       </IonPage>

);
};

export default Page2;



