import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cricket} from "./Shared/Models/Cricket";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Top 6 players in Cricket';

  player1: Cricket = {playerName: "Virat Kohli", age: 35, team: "India", jerseyNumber: 18, isRetired: false};
  player2: Cricket = {playerName: "MS Dhoni", age: 43, team: "India", jerseyNumber: 7, isRetired: true};
  player3: Cricket = {playerName: "AB de Villiers", age: 40, team: "South Africa", jerseyNumber: 17, isRetired: true};
  player4: Cricket = {playerName: "Chris Gayle", age: 44, team: "West Indies", jerseyNumber: 45, isRetired: true};
  player5: Cricket = {playerName: "David Warner", age: 37, team: "Australia", jerseyNumber: 31, isRetired: false};
  player6: Cricket = {playerName: "Joe Root", age: 33, team: "England", jerseyNumber: 66, isRetired: false};


  Players : Cricket[] = [this.player1,this.player2,this.player3,this.player4,this.player5,this.player6];
}
