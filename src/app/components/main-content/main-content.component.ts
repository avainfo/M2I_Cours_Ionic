import {Component} from '@angular/core';
import {IonCol, IonText} from "@ionic/angular/standalone";
import {logoIonic} from "ionicons/icons";
import {addIcons} from "ionicons";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [
    IonCol,
    HeaderComponent,
    HeaderComponent,
    IonText
  ]
})
export class MainContentComponent {

  constructor() {
    addIcons({logoIonic});
  }
}
