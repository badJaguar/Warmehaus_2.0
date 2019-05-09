import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { MaterialShareModule } from '../../../app/constants/material-share/material-share.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MaterialShareModule
  ],
})
export class StartPageModule { }
