import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CricketListComponent} from "./app/cricket-list/cricket-list.component";
import {CricketListItemComponent} from "./app/cricket-list-item/cricket-list-item.component";


// defining routes of my files here
const routes: Routes = [
  {path: 'players', component:CricketListComponent},
  {path: 'players/:playerName', component: CricketListItemComponent}
];

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
