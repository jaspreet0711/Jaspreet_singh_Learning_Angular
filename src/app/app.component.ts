import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Cricket} from "./Shared/Models/Cricket";
import {JsonPipe, NgForOf} from "@angular/common";
import {CricketListComponent} from "./cricket-list/cricket-list.component";
import {CricketListItemComponent} from "./cricket-list-item/cricket-list-item.component";
import {CricketPlayerService} from "./services/cricket-player.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CricketListComponent, CricketListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Top 6 players in Cricket';
  columns:string[]= ['playerName', 'age', 'team', 'jerseyNumber', 'isRetired'];
  Players: Cricket[] = [];

  constructor(private playerService: CricketPlayerService) {
  } // Dependency injection here


  ngOnInit() {
    this.playerService.getPlayerList().subscribe({
      next: (data: Cricket[]) => this.Players = data,
      error:err => console.error("Error fetching player list", err),
      complete:() => console.log("Player List fetched successfully!")
    })
  }

  protected readonly CricketPlayerService = CricketPlayerService;
}
