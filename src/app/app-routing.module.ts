import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './body-part/start-page/start-page.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { Cab11WComponent } from './body-part/warmehaus/cab11-w/cab11-w.component';

const routes: Routes = [
   { path: 'home', component: StartPageComponent},
  // // { path: 'contacts', component: ContactsComponent },
      { path: 'warmehaus/mat-160Watt', component: WarmingMat160WComponent },
      { path: 'warmehaus/mat-200Watt', component: WarmingMat200WComponent },
      { path: 'warmehaus/cable-11Watt', component: Cab11WComponent },
      
      // { path: 'cab-14W-thin', component: Cab14WThinComponent },
      // { path: 'cab-20W-uv-protection', component: Cab20WUvComponent },
      // { path: 'termostats', component: TermostatComponent },
      // { path: 'films', component: FilmsComponent },
      // { path: 'anti-icing', component: AnitIcingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'warmehaus', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
