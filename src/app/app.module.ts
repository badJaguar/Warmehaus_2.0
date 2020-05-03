import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NguCarouselModule } from '@ngu/carousel';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { GtagModule } from 'angular-gtag';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CookieService } from 'ngx-cookie-service';
import { NgxJsonLdModule } from 'ngx-json-ld';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArnoldRakMat180wComponent } from './body-part/arnold-rak/arnold-rak-mat180w/arnold-rak-mat180w.component';
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
import { Cab11WComponent } from './body-part/warmehaus/cab11-w/cab11-w.component';
import { Cab14WComponent } from './body-part/warmehaus/cab14-w/cab14-w.component';
import { Cab20WComponent } from './body-part/warmehaus/cab20-w/cab20-w.component';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { WarmehausMainPageComponent } from './body-part/warmehaus/main-page/main-page.component';
import { TermostatsItemComponent } from './body-part/warmehaus/termostats-item/termostats-item.component';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { FooterComponent } from './footer-part/footer/footer.component';
import { PhonesSheetComponent } from './footer-part/phones-sheet/phones-sheet.component';
import { BreadcrumbsComponent } from './header-part/breadcrumbs/breadcrumbs.component';
import { ChipsComponent } from './header-part/chips/chips.component';
import { HeaderMenuComponent } from './header-part/header-menu/header-menu.component';
import { ToolbarComponent } from './header-part/toolbar/toolbar.component';
import { MaterialShareModule } from './modules/material-share/material-share.module';
import { SafeHtmlPipe } from './safe-html';
import { SchemaMarkupComponent } from './seo/schema-markup/schema-markup.component';
import { SqareCalculatorComponent } from './sqare-calculator/sqare-calculator.component';
import { ArnoldRakMat200wComponent } from './body-part/arnold-rak/arnold-rak-mat200w/arnold-rak-mat200w.component';
import { ArnoldRakCab20wComponent } from './body-part/arnold-rak/arnold-rak-cab20w/arnold-rak-cab20w.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    PhonesSheetComponent,
    StartPageComponent,
    ToolbarComponent,
    BreadcrumbsComponent,
    WarmingMat160WComponent,
    WarmingMat200WComponent,
    Cab11WComponent,
    Cab14WComponent,
    Cab20WComponent,
    SafeHtmlPipe,
    FilmsComponent,
    AnitIcingComponent,
    TermostatsComponent,
    ChipsComponent,
    FooterComponent,
    ContactsComponent,
    SchemaMarkupComponent,
    InfoComponent,
    TermostatsItemComponent,
    SqareCalculatorComponent,
    WarmehausMainPageComponent,
    NexansMainPageComponent,
    MillimatComponent,
    Txlp1Component,
    Txlp2rComponent,
    PipeCoolingComponent,
    GutterCoolingComponent,
    GutterCoolingItemComponent,
    RaychemT2BlueComponent,
    RaychemMainPageComponent,
    RaychemT2quicknetComponent,
    ArnoldRakMainPageComponent,
    ArnoldRakMat180wComponent,
    ArnoldRakMat200wComponent,
    ArnoldRakCab20wComponent,
  ],
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CdkTableModule,
    CdkTreeModule,
    CommonModule,
    FlexLayoutModule,
    FlexLayoutModule.withConfig({ ssrObserveBreakpoints: ['xs', 'lt-md'] }),
    FormsModule,
    HttpClientModule,
    ImageViewerModule,
    MaterialShareModule,
    NgtUniversalModule,
    NguCarouselModule,
    GtagModule.forRoot({ trackingId: 'UA-139924647-1', trackPageviews: true }),
    OverlayModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    ScrollToModule.forRoot(),
    TransferHttpCacheModule,
    NgxJsonLdModule,
    PinchZoomModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [PhonesSheetComponent],
  exports: [],
  providers: [SafeHtmlPipe, Title, CookieService],
})

export class AppModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({
        uri: 'http://localhost:3000/graphql',
      }),
      cache: new InMemoryCache(),
      connectToDevTools: true,

    });
  }
}
