import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmingMat160WRoutingModule } from './warming-mat160-w-routing.module';
import { WarmingMat160WComponent } from './warming-mat160-w/warming-mat160-w.component';
import { MaterialShareModule } from '../../../../app/constants/material-share/material-share.module';

@NgModule({
  declarations: [WarmingMat160WComponent],
  imports: [
    CommonModule,
    WarmingMat160WRoutingModule,
    MaterialShareModule,
  ]
})
export class WarmingMat160WModule { }
