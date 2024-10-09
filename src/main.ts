import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CricketListComponent} from "./app/cricket-list/cricket-list.component";
import {CricketListItemComponent} from "./app/cricket-list-item/cricket-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



// defining routes of my files here
const routes: Routes = [
  {path: 'players', component:CricketListComponent},
  {path: 'players/:playerName', component: CricketListItemComponent},
  {path: 'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent} // wildcard routes
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
