import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

type ContainerProps = object

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
       <IonButton>Click Me</IonButton>
      <IonButton disabled={true}>Disabled</IonButton>
    </div>
  );
};

export default ExploreContainer;