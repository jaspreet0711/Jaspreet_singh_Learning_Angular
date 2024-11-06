import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Cricket} from "../Shared/Models/Cricket";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(): {Players : Cricket[]} {

    // mock data
    const Players : Cricket[] = [
      {id: 1, playerName: "Virat Kohli", age: 35, team: "India", jerseyNumber: 18, isRetired: false, image: "/assets/virat_kohli.jpeg"},
      {id: 2, playerName: "MS Dhoni", age: 43, team: "India", jerseyNumber: 7, isRetired: true, image: "/assets/ms_dhoni.jpeg"},
      {id: 3, playerName: "AB de Villiers", age: 40, team: "South Africa", jerseyNumber: 17, isRetired: true, image: "/assets/Abd.jpeg"},
      {id: 4, playerName: "Chris Gayle", age: 44, team: "West Indies", jerseyNumber: 45, isRetired: true, image: "/assets/Gayle.jpeg"},
      {id: 5, playerName: "David Warner", age: 37, team: "Australia", jerseyNumber: 31, isRetired: false, image: "/assets/David.jpeg"},
      {id: 6, playerName: "Joe Root", age: 33, team: "England", jerseyNumber: 66, isRetired: false, image: "/assets/Root.jpeg"}
    ];
    return {Players};
  }
}
