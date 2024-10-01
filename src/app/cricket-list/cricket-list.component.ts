import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {CricketListItemComponent} from "../cricket-list-item/cricket-list-item.component";

@Component({
  selector: 'app-cricket-list',
  standalone: true,
  imports: [NgForOf, CricketListItemComponent],
  templateUrl: './cricket-list.component.html',
  styleUrl: './cricket-list.component.scss'
})
export class CricketListComponent {

}
