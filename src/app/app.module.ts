import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { StageComponent } from './modules/stage/stage.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
