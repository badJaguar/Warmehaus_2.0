import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cab14WRoutingModule } from './cab14-w-routing.module';
import { MaterialShareModule } from '../../../../app/constants/material-share/material-share.module';
import { Cab14WComponent } from './cab14-w/cab14-w.component';

@NgModule({
  declarations: [Cab14WComponent],
  imports: [
    CommonModule,
    Cab14WRoutingModule,
    MaterialShareModule
  ]
})
export class Cab14WModule { }
