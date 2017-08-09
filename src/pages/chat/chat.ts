import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FirebaseListObservable} from 'angularfire2/database';
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

  public messages: FirebaseListObservable<any[]>
  public currentUser ; 
  public messageToSend:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private af:AF) {
    if(this.gameIsLoaded()){
        this.af.setMessages();
        this.messages = this.af.messages;
        this.currentUser=this.af.currentUser;
    } 
  
  }

  gameIsLoaded(){
    return (this.af.currentGame!=null&&this.af.currentGame!=undefined)
  }
  sendMessage(){
    if (this.messageToSend!=''){
      this.af.sendMessage(this.messageToSend);
      this.messageToSend = ''
    }
  }

  parseDate(date:string){
    let fechaYHora = date.split(' ')
    let horaYminutos = fechaYHora[1].split(':')
    return horaYminutos[0]+':'+horaYminutos[1]
  }

  showDisplayName(displayName:string){
    let result ='';
    if (displayName != this.af.user.displayName){
      result = displayName + ': ';
    }
    return result;
  }

}
