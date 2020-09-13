import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { relloReducer } from './store/rello.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { BoardSandbox } from './rello.sandbox';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ board: relloReducer }),
  ],
  providers: [BoardSandbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
