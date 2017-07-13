import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'cb-vdl/src/app/header/header.module';
import { FooterModule } from 'cb-vdl/src/app/footer/footer.module';
import { CBFrameworkModule } from 'cb-vdl/src/app/cb-framework/cb-framework.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { StageComponent } from './modules/stage/stage.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { appRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { CandidateCardComponent } from './modules/candidate-card/candidate-card.component';

const cbvdl = [
  HeaderModule,
  FooterModule,
  CBFrameworkModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StageComponent,
    CandidateCardComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule,
    ...cbvdl,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
