import { Component } from '@angular/core';
import { IonicPage, NavController,MenuController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { TablePage } from '../table/table';
import { CharacterSheet } from '../character-sheet/character-sheet';
import { AF } from './../../providers/af';

/**
 * Generated class for the PlayingTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-playing-tabs',
  templateUrl: 'playing-tabs.html'
})
@IonicPage()
export class PlayingTabsPage {

  constructor(public navCtrl: NavController, public af:AF,public menu : MenuController) {
    this.chatRoot = ChatPage;
    this.charSheetRoot = CharacterSheet;
    this.tableRoot = TablePage;
  }

  chatRoot : any;
  tableRoot : any;
  charSheetRoot : any;

  public menuIcon: string = this.af.menuIcon ;

  gameIsLoaded(){
    return (this.af.currentGame!=null&&this.af.currentGame!=undefined)
  }

  openMenu(){ 
    //this.menu.isOpen()
    //console.log(this.menu.getMenus())
   // this.navCtrl.setRoot(HomePage);
  }

}
