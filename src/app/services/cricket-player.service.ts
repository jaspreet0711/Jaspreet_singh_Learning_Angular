import { Injectable } from '@angular/core';
import {Cricket} from "../Shared/Models/Cricket";
import {Players} from "../Shared/mock-content";
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {
  private apiUrl = 'api/playerList';
  private playerList: Cricket[] = Players;
  constructor(private http: HttpClient) { }

  // using my observable method here
  getPlayerList(): Observable<Cricket[]>{
    return this.http.get<Cricket[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // creating my CRUD methods here
  /**
   * I have player name as main value in my code
   * So I'm going to replace the condition to Add/update/delete/read methods by using player name not by id or number
   * @param newPlayer
   */
  // add player method
  addPlayer(newPlayer:Cricket) : Observable<Cricket>{
    newPlayer.id = this.generateNewId();
    this.playerList.push(newPlayer);
    return this.http.post<Cricket>(this.apiUrl, newPlayer).pipe(catchError(this.handleError));

  }

  //update player method
  updatePlayer(updatedPlayer: Cricket): Observable<Cricket | undefined> {
    const url = `${this.apiUrl}/${updatedPlayer.id}`;
    return this.http.put<Cricket>(url, updatedPlayer).pipe(catchError(this.handleError));
  }

  // delete method here
  deletePlayer(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  //generate Id method
  generateNewId(): number{
    return this.playerList.length > 0 ? Math.max(...this.playerList.map(Players => Players.id)) + 1 : 1;
  }

  // read players method
  getPlayerByName(name: string): Observable<Cricket>{
    return this.http.get<Cricket>(`${this.apiUrl}/${name}`).pipe(catchError(this.handleError))
  }

  selectedCricket?: Cricket;
  selectCricket(player: Cricket): void{
    this.selectedCricket = player;
  }


  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}
