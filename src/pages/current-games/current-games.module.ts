import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentGamesPage } from './current-games';

@NgModule({
  declarations: [
    CurrentGamesPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentGamesPage),
  ],
  exports: [
    CurrentGamesPage
  ]
})
export class CurrentGamesPageModule {}
