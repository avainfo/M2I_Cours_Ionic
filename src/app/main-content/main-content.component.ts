import {Component} from '@angular/core';
import {IonCol} from "@ionic/angular/standalone";
import {logoIonic} from "ionicons/icons";
import {addIcons} from "ionicons";
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  imports: [
    IonCol,
    HeaderComponent,
    HeaderComponent
  ]
})
export class MainContentComponent {

  constructor() {
    addIcons({logoIonic});
  }
}
