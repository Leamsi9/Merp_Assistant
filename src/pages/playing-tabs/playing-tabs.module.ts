import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayingTabsPage } from './playing-tabs';
import { ChatPage } from '../chat/chat';
import {TablePage} from '../table/table';


@NgModule({
  declarations: [
    PlayingTabsPage,
    ChatPage,
    TablePage
  ],
  imports: [
    IonicPageModule.forChild(PlayingTabsPage),
  ]
})
export class PlayingTabsPageModule {}
