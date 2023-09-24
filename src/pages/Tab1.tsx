import { IonFab, IonRow, IonFabButton, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonGrid, IonCol } from '@ionic/react';
import './Tab1.css';
import { usePosition } from '../hooks/usePosition';
import { locateOutline } from 'ionicons/icons';

const Tab1: React.FC = () => {
  
  const { coordinates, getCurrentPosition } = usePosition()
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>GPS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size='12' className="ion-text-center">
              <IonText>Latitude: {coordinates?.latitude}</IonText>
            </IonCol>
            <IonCol size='12' className="ion-text-center">
              <IonText>Longitude: {coordinates?.longitude}</IonText>
            </IonCol>
            <IonCol size='12' className="ion-text-center">
              <IonText><b>Please turn On your GPS, if it didn't work</b></IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton onClick={ () => getCurrentPosition()}>
            <IonIcon icon={locateOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
