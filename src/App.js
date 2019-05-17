import React from 'react';
import { IonContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import '@ionic/core/css/ionic.bundle.css';

function App() {
  return (
    <div id="wrapper">
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
              <IonIcon name="arrow-dropleft" />
            </IonFabButton>
          </IonFab>
    </div>
  );
}

export default App;
