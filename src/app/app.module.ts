import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { IndexComponent } from './index/index.component';
import { HighscoresComponent } from './highscores/highscores.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HighscoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
