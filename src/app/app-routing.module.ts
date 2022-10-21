import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArnoldRakCab20wComponent } from './body-part/arnold-rak/arnold-rak-cab20w/arnold-rak-cab20w.component';
import { ArnoldRakMat180wComponent } from './body-part/arnold-rak/arnold-rak-mat180w/arnold-rak-mat180w.component';
import { ArnoldRakMat200wComponent } from './body-part/arnold-rak/arnold-rak-mat200w/arnold-rak-mat200w.component';
import { ArnoldRakMainPageComponent } from './body-part/arnold-rak/main-page/main-page.component';
import { ContactsComponent } from './body-part/contacts/contacts.component';
import { InfoComponent } from './body-part/info/info.component';
import { NexansMainPageComponent } from './body-part/nexans/main-page/main-page.component';
import { MillimatComponent } from './body-part/nexans/millimat/millimat.component';
import { Txlp1Component } from './body-part/nexans/txlp1/txlp1.component';
import { Txlp2rComponent } from './body-part/nexans/txlp2r/txlp2r.component';
import { RaychemMainPageComponent } from './body-part/raychem/main-page/main-page.component';
import { RaychemT2quicknetComponent } from './body-part/raychem/raychem-t2quicknet/raychem-t2quicknet.component';
import { RaychemT2BlueComponent } from './body-part/raychem/raychem/raychem.component';
import { StartPageComponent } from './body-part/start-page/start-page.component';
import { AnitIcingComponent } from './body-part/warmehaus/anit-icing/anit-icing.component';
import { GutterCoolingItemComponent } from './body-part/warmehaus/anit-icing/gutter-cooling-item/gutter-cooling-item.component';
import { GutterCoolingComponent } from './body-part/warmehaus/anit-icing/gutter-cooling/gutter-cooling.component';
import { PipeCoolingComponent } from './body-part/warmehaus/anit-icing/pipe-cooling/pipe-cooling.component';
import { Cab14WComponent } from './body-part/warmehaus/cab14-w/cab14-w.component';
import { Cab20WComponent } from './body-part/warmehaus/cab20-w/cab20-w.component';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { WarmehausMainPageComponent } from './body-part/warmehaus/main-page/main-page.component';
import { TermostatsItemComponent } from './body-part/warmehaus/termostats-item/termostats-item.component';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { MetaAntiIcing } from './seo/open-graph/warmehaus/meta-data-antiIcing';
import { MetaCab14Watt } from './seo/open-graph/warmehaus/meta-data-cab-14Watt';
import { MetaCab20Watt } from './seo/open-graph/warmehaus/meta-data-cab-20Watt';
import { MetaFilms } from './seo/open-graph/warmehaus/meta-data-cab-metaFilms';
import { MetaMat160 } from './seo/open-graph/warmehaus/meta-data-cab-metaMat160';
import { MetaMat200 } from './seo/open-graph/warmehaus/meta-data-cab-metaMat200';
import { MetaTermostats } from './seo/open-graph/warmehaus/meta-data-cab-metaTernostats';
import { MetaContacts } from './seo/open-graph/warmehaus/meta-data-contacts';
import { MetaInstructionsPage } from './seo/open-graph/warmehaus/meta-data-instructions';
import { MetaSrartPage } from './seo/open-graph/warmehaus/meta-data-startPage';
import { MetaRaychem } from './seo/open-graph/warmehaus/raychem.data';

const metaStartPage: MetaSrartPage = new MetaSrartPage();
const metaContacts: MetaContacts = new MetaContacts();
const metaInstructions: MetaInstructionsPage = new MetaInstructionsPage();
const meta160Watt: MetaMat160 = new MetaMat160();
const meta200Watt: MetaMat200 = new MetaMat200();
const metaCab14W: MetaCab14Watt = new MetaCab14Watt();
const metaCab20W: MetaCab20Watt = new MetaCab20Watt();
const metaFilms: MetaFilms = new MetaFilms();
const metaAntiIcing: MetaAntiIcing = new MetaAntiIcing();
const metaTermostats: MetaTermostats = new MetaTermostats();

const metaRaychem: MetaRaychem = new MetaRaychem();

const routes: Routes = [
  {
    path: '', component: StartPageComponent, data: {
      title: metaStartPage.ogTitleContent, description: metaStartPage.descriptionContent,
    }
  },
  {
    path: 'home/contacts', component: ContactsComponent, data: {
      title: metaContacts.ogTitleContent, description: metaContacts.descriptionContent
    }
  },
  {
    path: 'home/instructions', component: InfoComponent, data: {
      title: metaInstructions.ogTitleContent, description: metaInstructions.descriptionContent
    }
  },

  {
    path: 'warmehaus', component: WarmehausMainPageComponent, data: {
      title: metaStartPage.ogTitleContent, description: metaStartPage.descriptionContent,
    }
  },
  {
    path: 'warmehaus/mat-160Watt', component: WarmingMat160WComponent, data: {
      title: meta160Watt.ogTitleContent, description: meta160Watt.descriptionContent,
    }
  },
  {
    path: 'warmehaus/mat-200Watt', component: WarmingMat200WComponent, data: {
      title: meta200Watt.ogTitleContent, description: meta200Watt.descriptionContent,
    }
  },
  // { path: 'warmehaus/cable-11Watt', component: Cab11WComponent },
  {
    path: 'warmehaus/cable-14Watt', component: Cab14WComponent, data: {
      title: metaCab14W.ogTitleContent, description: metaCab14W.descriptionContent,
    }
  },
  {
    path: 'warmehaus/cable-20Watt', component: Cab20WComponent, data: {
      title: metaCab20W.ogTitleContent, description: metaCab20W.descriptionContent,
    }
  },
  {
    path: 'warmehaus/films', component: FilmsComponent, data: {
      title: metaFilms.ogTitleContent, description: metaFilms.descriptionContent,
    }
  },

  {
    path: 'warmehaus/anti-icing', component: AnitIcingComponent, data: {
      title: metaAntiIcing.ogTitleContent, description: metaAntiIcing.descriptionContent,
    }
  },
  { path: 'warmehaus/anti-icing/pipe-cooling', component: PipeCoolingComponent },
  { path: 'warmehaus/anti-icing/systems-and-gutter-cooling', component: GutterCoolingComponent },
  { path: 'warmehaus/anti-icing/systems-and-gutter-cooling/:id', component: GutterCoolingItemComponent },

  {
    path: 'warmehaus/termostats', component: TermostatsComponent, data: {
      title: metaTermostats.ogTitleContent, description: metaTermostats.descriptionContent,
    }
  },
  {
    path: 'warmehaus/termostats/:id', component: TermostatsItemComponent,
  },

  { path: 'nexans', component: NexansMainPageComponent },
  { path: 'nexans/millimat', component: MillimatComponent },
  { path: 'nexans/txlp1', component: Txlp1Component },
  { path: 'nexans/txlp2r', component: Txlp2rComponent },

  {
    path: 'devi', component: RaychemMainPageComponent, data: {
      title: metaRaychem.ogTitleContent, description: metaRaychem.descriptionContent
    },
  },
  { path: 'devi/devi-flex-18t', component: RaychemT2BlueComponent },
  { path: 'devi/devi-comfort-150t', component: RaychemT2quicknetComponent },

  { path: 'arnold-rak', component: ArnoldRakMainPageComponent },
  { path: 'arnold-rak/mat-180w', component: ArnoldRakMat180wComponent },
  { path: 'arnold-rak/mat-200w', component: ArnoldRakMat200wComponent },
  { path: 'arnold-rak/cab-20w', component: ArnoldRakCab20wComponent },

  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'contacts', redirectTo: 'home/contacts', pathMatch: 'full' },
  { path: 'info', redirectTo: 'home/instructions', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' } // TODO: Create 404 Component
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
export class AppRoutingModule {

}
