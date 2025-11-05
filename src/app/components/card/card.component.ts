import {Component, Input, OnInit} from '@angular/core';
import {IonButton, IonCard, IonRow} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {logoIonic} from "ionicons/icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    IonCard,
    IonRow,
    IonButton
  ]
})
export class CardComponent implements OnInit {
  @Input() title: string = "";
  @Input() editButton: string = "";
  @Input() mainTitle: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.title);
  }

}
