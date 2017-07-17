import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';




export interface USER {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    characters : FirebaseListObservable<any[]>;
};

@Injectable()
export class UserProvider {

  private user : FirebaseListObservable<any[]>;

  constructor(public db:AngularFireDatabase) {
    this.user = this.db.list('users')
  }

  getUser(uid:string){
    var result:USER;
    this.db.object('users/'+uid).forEach(element => {
            result.providerId = element.providerId;
            result.characters = element.chraracters;
            result.email = element.email;
            result.photoURL=element.photoURL;
            result.displayName = element.displayName;   
    });;
    return result;
  }

  createUser(user:any){
    var userCreate = {
           providerId : user.providerId,
           displayName :user.displayName,
           email : user.email,
           photoURL : 'gs://merp-64b26.appspot.com/diceIcon.png',
           characters : null
          }
    this.user.update(user.uid,userCreate);
  }
}
