import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cab11WRoutingModule } from './cab11-w-routing.module';
import { Cab11WComponent } from './cab11-w/cab11-w.component';
import { MaterialShareModule } from '../../../../app/constants/material-share/material-share.module';

@NgModule({
  declarations: [Cab11WComponent],
  imports: [
    CommonModule,
    Cab11WRoutingModule,
    MaterialShareModule
  ]
})
export class Cab11WModule { }
