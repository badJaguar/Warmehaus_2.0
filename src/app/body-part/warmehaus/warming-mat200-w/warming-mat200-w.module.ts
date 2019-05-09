import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarmingMat200WRoutingModule } from './warming-mat200-w-routing.module';
import { MaterialShareModule } from '../../../../app/constants/material-share/material-share.module';
import { WarmingMat200WComponent } from './warming-mat200-w/warming-mat200-w.component';

@NgModule({
  declarations: [WarmingMat200WComponent],
  imports: [
    CommonModule,
    WarmingMat200WRoutingModule,
    MaterialShareModule
  ]
})
export class WarmingMat200WModule { }
