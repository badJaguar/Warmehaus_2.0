import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
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
import { ToolbarComponent } from './header-part/toolbar/toolbar.component';
import { BreadcrumbsComponent } from './header-part/breadcrumbs/breadcrumbs.component';
import { FilmsComponent } from './body-part/warmehaus/films/films.component';
import { AnitIcingComponent } from './body-part/warmehaus/anit-icing/anit-icing.component';
import { SafeHtmlPipe } from './safe-html';
import { FooterComponent } from './footer-part/footer/footer.component';
import { MaterialShareModule } from './constants/material-share/material-share.module';
import { TermostatsComponent } from './body-part/warmehaus/termostats/termostats.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    PhonesSheetComponent,
    ToolbarComponent,
    BreadcrumbsComponent,
    SafeHtmlPipe,
    FilmsComponent,
    AnitIcingComponent,
    TermostatsComponent,
    FooterComponent,
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
    OverlayModule,
    ReactiveFormsModule,
    RouterModule,
    ScrollingModule,
    ScrollToModule.forRoot(),
    TransferHttpCacheModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [PhonesSheetComponent],
  providers: [SafeHtmlPipe],
})
export class AppModule { }
