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

}
