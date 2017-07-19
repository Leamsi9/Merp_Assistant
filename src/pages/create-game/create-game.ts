import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';

/**
 * Generated class for the CreateGamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-game',
  templateUrl: 'create-game.html',
})
export class CreateGamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AF) {
  }

  public menuIcon: string = this.af.menuIcon ;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGamePage');
  }

}
