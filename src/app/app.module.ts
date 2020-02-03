import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderMenuComponent } from './header-part/header-menu/header-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { NgModule } from '@angular/core';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NguCarouselModule } from '@ngu/carousel';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { PhonesSheetComponent } from './footer-part/phones-sheet/phones-sheet.component';
import { StartPageComponent } from './body-part/start-page/start-page.component';
import { ToolbarComponent } from './header-part/toolbar/toolbar.component';
import { BreadcrumbsComponent } from './header-part/breadcrumbs/breadcrumbs.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { Cab11WComponent } from './body-part/warmehaus/cab11-w/cab11-w.component';
import { Cab14WComponent } from './body-part/warmehaus/cab14-w/cab14-w.component';
import { Cab20WComponent } from './body-part/warmehaus/cab20-w/cab20-w.component';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { AnitIcingComponent } from './body-part/warmehaus/anit-icing/anit-icing.component';
import { SafeHtmlPipe } from './safe-html';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';
import { ChipsComponent } from './header-part/chips/chips.component';
import { FooterComponent } from './footer-part/footer/footer.component';
import { NgxJsonLdModule } from 'ngx-json-ld';
import { SchemaMarkupComponent } from './seo/schema-markup/schema-markup.component';
import { MaterialShareModule } from './modules/material-share/material-share.module';
import { GtagModule } from 'angular-gtag';
import { ContactsComponent } from './body-part/contacts/contacts.component';
import { InfoComponent } from './body-part/info/info.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { TermostatsItemComponent } from './body-part/warmehaus/termostats-item/termostats-item.component';
import { SqareCalculatorComponent } from './sqare-calculator/sqare-calculator.component';
import { WarmehausMainPageComponent } from './body-part/warmehaus/main-page/main-page.component';
import { NexansMainPageComponent } from './body-part/nexans/main-page/main-page.component';
import { MillimatComponent } from './body-part/nexans/millimat/millimat.component';
import { Txlp1Component } from './body-part/nexans/txlp1/txlp1.component';
import { Txlp2rComponent } from './body-part/nexans/txlp2r/txlp2r.component';
import { PipeCoolingComponent } from './body-part/warmehaus/anit-icing/pipe-cooling/pipe-cooling.component';
import { GutterCoolingComponent } from './body-part/warmehaus/anit-icing/gutter-cooling/gutter-cooling.component';
import { GutterCoolingItemComponent } from './body-part/warmehaus/anit-icing/gutter-cooling-item/gutter-cooling-item.component';
import { CookieService } from 'ngx-cookie-service';

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
  ],
  imports: [
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
export class AppModule { }
