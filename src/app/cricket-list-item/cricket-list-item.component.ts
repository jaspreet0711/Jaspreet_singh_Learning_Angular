import {Component, Input} from '@angular/core';
import {Cricket} from "../Shared/Models/Cricket";
import {NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";


@Component({
  selector: 'app-cricket-list-item',
  standalone: true,
  imports: [NgIf, MatCard, MatCardTitle, MatCardHeader, MatCardContent],
  templateUrl: './cricket-list-item.component.html',
  styleUrl: './cricket-list-item.component.scss'
})
export class CricketListItemComponent {
  @Input() Players?: Cricket;
}
