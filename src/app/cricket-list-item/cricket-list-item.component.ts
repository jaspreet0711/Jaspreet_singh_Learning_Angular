import {Component, Input} from '@angular/core';
import {Cricket} from "../Shared/Models/Cricket";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cricket-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cricket-list-item.component.html',
  styleUrl: './cricket-list-item.component.scss'
})
export class CricketListItemComponent {
  @Input() player?: Cricket;
}
