import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './body-part/start-page/start-page.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { Cab11WComponent } from './body-part/warmehaus/cab11-w/cab11-w.component';
import { Cab14WComponent } from './body-part/warmehaus/cab14-w/cab14-w.component';
import { Cab20WComponent } from './body-part/warmehaus/cab20-w/cab20-w.component';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { AnitIcingComponent } from './body-part/warmehaus/anit-icing/anit-icing.component';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';
import { ContactsComponent } from './body-part/warmehaus/contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: 'contacts', component: ContactsComponent },

  { path: 'warmehaus/mat-160Watt', component: WarmingMat160WComponent },
  { path: 'warmehaus/mat-200Watt', component: WarmingMat200WComponent },
  { path: 'warmehaus/cable-11Watt', component: Cab11WComponent },
  { path: 'warmehaus/cable-14Watt', component: Cab14WComponent },
  { path: 'warmehaus/cable-20Watt', component: Cab20WComponent },
  { path: 'warmehaus/films', component: FilmsComponent },
  { path: 'warmehaus/anti-icing', component: AnitIcingComponent },
  { path: 'warmehaus/termostats', component: TermostatsComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'warmehaus', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
