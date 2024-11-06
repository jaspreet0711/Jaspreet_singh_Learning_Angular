import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CricketListComponent} from "./app/cricket-list/cricket-list.component";
import {CricketListItemComponent} from "./app/cricket-list-item/cricket-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {importProvidersFrom} from "@angular/core";



// defining routes of my files here
const routes: Routes = [
  {path: '', redirectTo: '/Players', pathMatch: 'full'},
  {path: 'Players', component:CricketListComponent},
  {path: 'Players/:playerName', component: CricketListItemComponent},
  {path: 'modify-list-item', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent} // wildcard routes
];


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),
    provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}))
  ],
}).catch((err) => console.error(err));
