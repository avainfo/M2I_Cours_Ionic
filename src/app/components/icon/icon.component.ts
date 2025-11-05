import {Component, Input} from '@angular/core';
import {IonButton, IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    IonIcon,
    IonButton
  ]
})
export class IconComponent {
  @Input() icon!: string;

  constructor() {
  }
}
