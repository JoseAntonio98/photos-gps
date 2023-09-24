import { IonContent, IonRow, IonFab, IonFabButton, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonText, IonCol } from '@ionic/react';
import './Tab3.css';
import { playOutline, star, stopCircleOutline } from 'ionicons/icons';
import { useMotion } from '../hooks/useMotion';

const Tab3: React.FC = () => {

  const {accel, getListenerAccel, stopAcceleration} = useMotion()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accelerometer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size='12' className='ion-text-center'>
              <IonText>Accelerometer</IonText>
            </IonCol>
            <IonCol size='12' className='ion-text-center'>
              <IonText>X: {accel?.x}</IonText>
            </IonCol>
            <IonCol size='12' className='ion-text-center'>
            <IonText>Y: {accel?.y}</IonText>
            </IonCol>
            <IonCol size='12' className='ion-text-center'>
            <IonText>Z: {accel?.z}</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical='bottom' horizontal='start' slot='fixed'>
          <IonFabButton onClick={ () => getListenerAccel()}>
            <IonIcon icon={playOutline}></IonIcon>
          </IonFabButton>
        </IonFab>        
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={ () => stopAcceleration()}>
            <IonIcon icon={stopCircleOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
