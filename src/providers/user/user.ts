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
    var result:USER = {} as USER;
    this.db.object('users/'+uid).forEach(element => {
            result.providerId = element.providerId;
            result.email = element.email;
            result.photoURL=element.photoURL;
            result.displayName = element.displayName;   
            result.characters = this.db.list('users/'+uid+'/characters');
    });;
    return result;
  }

  createUser(user:any,userName:string){
    var userCreate = {
           providerId : user.providerId,
           displayName :userName,
           email : user.email,
           photoURL : 'https://firebasestorage.googleapis.com/v0/b/merp-64b26.appspot.com/o/diceIcon.png?alt=media&token=a7bcb3e7-0cd1-414c-a403-c192095e16fa',
           characters : null
          }
    this.user.update(user.uid,userCreate);
  }
}
