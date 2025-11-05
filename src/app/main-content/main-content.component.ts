import {Component} from '@angular/core';
import {IonCol, IonIcon, IonRow} from "@ionic/angular/standalone";
import {logoIonic} from "ionicons/icons";
import {addIcons} from "ionicons";
import {IconComponent} from "../components/icon/icon.component";
import {SpacerComponent} from "../components/spacer/spacer.component";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [
    IonCol,
    IonRow,
    IonIcon,
    IconComponent,
    SpacerComponent
  ]
})
export class MainContentComponent {

  constructor() {
    addIcons({logoIonic});
  }
}
