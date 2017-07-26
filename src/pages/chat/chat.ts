import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';


/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private af:AF) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  gameIsLoaded(){
    return (this.af.currentGame!=null&&this.af.currentGame!=undefined)
  }

}
