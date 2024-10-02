import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CricketListItemComponent} from "../cricket-list-item/cricket-list-item.component";
import {CricketPlayerService} from "../services/cricket-player.service";
import {Cricket} from "../Shared/Models/Cricket";

@Component({
  selector: 'app-cricket-list',
  standalone: true,
  imports: [NgForOf, CricketListItemComponent],
  templateUrl: './cricket-list.component.html',
  styleUrl: './cricket-list.component.scss'
})
export class CricketListComponent implements OnInit{

  // placeholder values
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

}
