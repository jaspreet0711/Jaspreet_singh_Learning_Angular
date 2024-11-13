import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CricketListComponent} from "./app/cricket-list/cricket-list.component";


// defining routes of my files here
const routes: Routes = [
  {path: '', redirectTo: '/Players', pathMatch: 'full'},
  {path: 'Players', component:CricketListComponent},

  // lazy load methods
  {path: 'Players/:playerName',
    loadComponent: () =>
      import('./app/cricket-list-item/cricket-list-item.component').then(m => m.CricketListItemComponent)},

  {path: 'modify-list-item',
    loadComponent: () =>
      import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)} // wildcard routes
];


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
