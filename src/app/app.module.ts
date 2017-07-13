import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'cb-vdl/src/app/header/header.module';
import { FooterModule } from 'cb-vdl/src/app/footer/footer.module';
import { CBFrameworkModule } from 'cb-vdl/src/app/cb-framework/cb-framework.module';


import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { appRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";

const cbvdl = [
  HeaderModule,
  FooterModule,
  CBFrameworkModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    ...cbvdl,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
