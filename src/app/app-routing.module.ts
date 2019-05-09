import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { AnitIcingComponent } from './body-part/warmehaus/anit-icing/anit-icing.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';

const routes: Routes = [
  { path: 'home', loadChildren: './body-part/start-page/start-page.module#StartPageModule' },
  { path: 'home/contacts', loadChildren: './body-part/contacts/contacts.module#ContactsModule' },

  {
    path: 'warmehaus/mat-160Watt',
    loadChildren: './body-part/warmehaus/warming-mat160-w/warming-mat160-w.module#WarmingMat160WModule'
  },
  {
    path: 'warmehaus/mat-200Watt',
    loadChildren: './body-part/warmehaus/warming-mat200-w/warming-mat200-w.module#WarmingMat200WModule'
  },
  { path: 'warmehaus/cable-11Watt',
  loadChildren: './body-part/warmehaus/cab11-w/cab11-w.module#Cab11WModule'
  },
  { path: 'warmehaus/cable-14Watt',
  loadChildren: './body-part/warmehaus/cab14-w/cab14-w.module#Cab14WModule'
   },
  { path: 'warmehaus/cable-20Watt',
loadChildren: './body-part/warmehaus/cab20-w/cab20-w.module#Cab20WModule'
},
  { path: 'warmehaus/films', component: FilmsComponent },
  { path: 'warmehaus/anti-icing', component: AnitIcingComponent },
  { path: 'warmehaus/termostats', component: TermostatsComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'warmehaus', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
