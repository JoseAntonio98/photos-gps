import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { camera } from 'ionicons/icons';

const Tab2: React.FC = () => {

  const { photos, takePhoto } = usePhotoGallery()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            { photos.map( (photo, index) => (
              <IonCol size='6' key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical='bottom' horizontal='center' slot='fixed'>
          <IonFabButton onClick={ () => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
