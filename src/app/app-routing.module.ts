import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { StartPageComponent } from './body-part/start-page/start-page.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { Cab11WComponent } from './body-part/warmehaus/cab11-w/cab11-w.component';
import { Cab14WComponent } from './body-part/warmehaus/cab14-w/cab14-w.component';
import { Cab20WComponent } from './body-part/warmehaus/cab20-w/cab20-w.component';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { AnitIcingComponent } from './body-part/warmehaus/anit-icing/anit-icing.component';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ContactsComponent } from './body-part/contacts/contacts.component';
import { InfoComponent } from './body-part/info/info.component';
import { TermostatsItemComponent } from './body-part/warmehaus/termostats-item/termostats-item.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'home/contacts', component: ContactsComponent },
  { path: 'home/instructions', component: InfoComponent },

  { path: 'warmehaus/mat-160Watt', component: WarmingMat160WComponent },
  { path: 'warmehaus/mat-200Watt', component: WarmingMat200WComponent },
  { path: 'warmehaus/cable-11Watt', component: Cab11WComponent },
  { path: 'warmehaus/cable-14Watt', component: Cab14WComponent },
  { path: 'warmehaus/cable-20Watt', component: Cab20WComponent },
  { path: 'warmehaus/films', component: FilmsComponent },
  { path: 'warmehaus/anti-icing', component: AnitIcingComponent },
  { path: 'warmehaus/termostats', component: TermostatsComponent },
  { path: 'warmehaus/termostats/:id', component: TermostatsItemComponent },


  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'contacts', redirectTo: 'home/contacts', pathMatch: 'full' },
  { path: 'info', redirectTo: 'home/instructions', pathMatch: 'full' },
  { path: 'warmehaus', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
