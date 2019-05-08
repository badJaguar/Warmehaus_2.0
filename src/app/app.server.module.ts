import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NgtPwaMockModule } from '@ng-toolkit/pwa';


@NgModule({
  imports: [
    AppModule,
    FlexLayoutServerModule,
    ModuleMapLoaderModule,
    ServerModule,
    ServerTransferStateModule,
    NgtPwaMockModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
