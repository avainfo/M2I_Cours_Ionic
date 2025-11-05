import {Component} from '@angular/core';
import {IonRow} from "@ionic/angular/standalone";
import {SpacerComponent} from "../spacer/spacer.component";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonRow,
    SpacerComponent,
    IconComponent
  ]
})
export class HeaderComponent {

  constructor() {
  }
}
