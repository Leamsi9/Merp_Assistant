import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AF} from './../../providers/af'

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AF) {
  }

  public menuIcon: string = this.af.menuIcon ;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

}
