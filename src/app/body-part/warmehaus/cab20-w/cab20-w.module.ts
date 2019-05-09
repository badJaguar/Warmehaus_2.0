import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cab20WRoutingModule } from './cab20-w-routing.module';
import { Cab20WComponent } from './cab20-w/cab20-w.component';
import { MaterialShareModule } from '../../../../app/constants/material-share/material-share.module';

@NgModule({
  declarations: [Cab20WComponent],
  imports: [
    CommonModule,
    Cab20WRoutingModule,
    MaterialShareModule
  ]
})
export class Cab20WModule { }
