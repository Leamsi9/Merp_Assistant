import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AF } from './../../providers/af';

/**
 * Generated class for the TablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private af:AF) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }

  gameIsLoaded(){
    return (this.af.currentGame!=null&&this.af.currentGame!=undefined)
  }

}
