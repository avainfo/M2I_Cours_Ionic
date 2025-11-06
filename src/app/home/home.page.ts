import {Component} from '@angular/core';
import {IonContent,} from '@ionic/angular/standalone';
import {MainContentComponent} from "../components/main-content/main-content.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, MainContentComponent],
})
export class HomePage {
  constructor() {
  }
}
