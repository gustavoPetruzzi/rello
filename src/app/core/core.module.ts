import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { relloReducer } from './store/rello.reducer';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ board: relloReducer }),
  ]
})
export class CoreModule { }
