import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from 'cb-vdl/src/app/header/header.module';
import { FooterModule } from 'cb-vdl/src/app/footer/footer.module';
import { CBFrameworkModule } from 'cb-vdl/src/app/cb-framework/cb-framework.module';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { StageComponent } from './modules/stage/stage.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { appRoutes } from "./app.routing";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { CandidateCardComponent } from './modules/candidate-card/candidate-card.component';
import { TabControlComponent } from './modules/tab-control/tab-control.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

const cbvdl = [
  HeaderModule,
  FooterModule,
  CBFrameworkModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DashboardComponent,
    StageComponent,
    CandidateCardComponent,
    TabControlComponent

  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule,
    ...cbvdl,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    TabsModule.forRoot()
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
