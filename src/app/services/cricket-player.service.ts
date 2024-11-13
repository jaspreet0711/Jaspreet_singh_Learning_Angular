import { Injectable } from '@angular/core';
import {Cricket} from "../Shared/Models/Cricket";
import {Players} from "../Shared/mock-content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {
  private playerList: Cricket[] = Players;
  constructor() { }

  // using my observable method here
  getPlayerList(): Observable<Cricket[]>{
    return of(this.playerList);
  }

  // creating my CRUD methods here
  /**
   * I have player name as main value in my code
   * So I'm going to replace the condition to Add/update/delete/read methods by using player name not by id or number
   * @param newPlayer
   */
  // add player method
  addPlayer(newPlayer:Cricket) : void{
    this.playerList.push(newPlayer);
  }

  //update player method
  updatePlayer(updatedPlayer: Cricket): Observable<Cricket | undefined> {
    const index = this.playerList.findIndex(player => player.id === updatedPlayer.id);
    if (index > -1) {
      this.playerList[index] = updatedPlayer;
      return of(updatedPlayer);
    }
    return of(undefined);
  }

  // delete method here
  deletePlayer(id: number): void{
    this.playerList = this.playerList.filter(player => player.id!== id);
  }

  //generate Id method
  generateNewId(): number{
    return this.playerList.length > 0 ? Math.max(...this.playerList.map(Players => Players.id)) + 1 : 1;
  }

  // read players method
  getPlayerByName(name: string): Observable<Cricket | undefined>{
    const member = this.playerList.find(player => player.playerName === name);
    return of(member);
  }

  selectedCricket?: Cricket;
  selectCricket(player: Cricket): void{
    this.selectedCricket = player;
  }

}
