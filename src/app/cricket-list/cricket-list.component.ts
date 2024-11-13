import {Component, OnInit} from '@angular/core';
import {JsonPipe, NgForOf, NgOptimizedImage, PercentPipe, UpperCasePipe} from "@angular/common";
import {CricketListItemComponent} from "../cricket-list-item/cricket-list-item.component";
import {CricketPlayerService} from "../services/cricket-player.service";
import {Cricket} from "../Shared/Models/Cricket";
import {Router, RouterLink} from "@angular/router";
import {AgeCategoryPipe} from "../age-category.pipe";
import {ColorPipe} from "../color.pipe";



@Component({
  selector: 'app-cricket-list',
  standalone: true,
  imports: [NgForOf, CricketListItemComponent, NgOptimizedImage, RouterLink, PercentPipe, UpperCasePipe, JsonPipe, AgeCategoryPipe, ColorPipe],
  templateUrl: './cricket-list.component.html',
  styleUrl: './cricket-list.component.scss'
})
export class CricketListComponent implements OnInit{

  // placeholder values
  columns:string[]= ['id', 'playerName', 'age', 'team', 'jerseyNumber', 'rating', 'isRetired'];
  Players: Cricket[] = [];


  constructor(private playerService: CricketPlayerService,
              private rout: Router) {
  } // Dependency injection here


  ngOnInit() {
    this.playerService.getPlayerList().subscribe({
      next: (data: Cricket[]) => this.Players = data,
      error:err => console.error("Error fetching player list", err),
      complete:() => console.log("Player List fetched successfully!")
    })
  }


selectedCricket?: Cricket;

selectCricket(player: Cricket): void{
  this.selectedCricket = player;
}

editPlayer(): void{
  this.rout.navigate(['/modify-list-item']);
}

onDelete(id:number):void{
  this.Players = this.Players.filter(Players => Players.id !== id);
}
}
