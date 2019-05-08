import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatOptionModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatTreeModule
} from '@angular/material';

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
import { StartPageComponent } from './body-part/start-page/start-page.component';
import { ToolbarComponent } from './header-part/toolbar/toolbar.component';
import { BreadcrumbsComponent } from './header-part/breadcrumbs/breadcrumbs.component';
import { WarmingMat160WComponent } from './body-part/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { WarmingMat200WComponent } from './body-part/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { Cab11WComponent } from './body-part/warmehaus/cab11-w/cab11-w.component';
import { Cab14WComponent } from './body-part/warmehaus/cab14-w/cab14-w.component';


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
    Cab14WComponent
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

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

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
  exports: [],
  providers: []
})
export class AppModule { }
