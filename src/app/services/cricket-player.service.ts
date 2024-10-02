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
    return of(Players);
  }

  // creating my CRUD methods here
  /**
   * I have player name as main value in my code
   * So I'm going to replace the condition to Add/update/delete/read methods by using player name not by id or number
   * @param newPlayer
   */
  // add player method
  addPlayer(newPlayer:Cricket) : Observable<Cricket[]>{
    this.playerList.push(newPlayer)
    return of(this.playerList);
  }

  //update player method
  updatePlayer(updatedPlayer: Cricket): Observable<Cricket[]>{
    const index = this.playerList.findIndex(player => player.playerName === updatedPlayer.playerName);
    if (index !== -1) {
      this.playerList[index] = updatedPlayer;
    }
    return of(this.playerList);
  }

  // delete method here
  deletePlayer(name: string): Observable<Cricket[]>{
    this.playerList = this.playerList.filter(player => player.playerName !== name);
    return of(this.playerList);
  }

  // read players method
  getPlayerByName(name: string): Observable<Cricket | undefined>{
    const member = this.playerList.find(player => player.playerName === name);
    return of(member);
  }

}
