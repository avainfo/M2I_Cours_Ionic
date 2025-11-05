import {Component} from '@angular/core';
import {IonButton, IonCol, IonIcon, IonInput, IonRow} from "@ionic/angular/standalone";
import {ProfileHeaderComponent} from "../components/profile-header/profile-header.component";
import {ProfilePictureComponent} from "../components/profile-picture/profile-picture.component";
import {CardComponent} from "../components/card/card.component";
import {logoIonic} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [
    IonCol,
    ProfileHeaderComponent,
    ProfilePictureComponent,
    CardComponent,
    IonRow,
    IonIcon,
    IonInput,
    IonButton
  ]
})
export class MainContentComponent {

  constructor() {
    addIcons({logoIonic});
  }


}
