import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cricket} from "./Shared/Models/Cricket";
import {JsonPipe, NgForOf} from "@angular/common";
import {CricketListComponent} from "./cricket-list/cricket-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CricketListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Top 6 players in Cricket';

}
