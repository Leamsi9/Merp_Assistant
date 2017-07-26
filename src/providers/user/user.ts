import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';




export interface USER {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    invites:FirebaseListObservable<any[]>;
    characters : FirebaseListObservable<any[]>;
};

@Injectable()
export class UserProvider {

  private users : FirebaseListObservable<any[]>;

  constructor(public db:AngularFireDatabase) {
    this.users = this.db.list('users')
  }

  getUser(uid:string){
    var result:USER = {} as USER;
    this.db.object('users/'+uid).forEach(element => {
            result.providerId = element.providerId;
            result.email = element.email;
            result.photoURL=element.photoURL;
            result.displayName = element.displayName;   
            result.characters = this.db.list('users/'+uid+'/characters');
            result.invites = this.db.list('users/'+uid+'/invites');
    });;
    return result;
  }

  getAllUsers(){
    return this.users;
  }
  getCharacter(uid:string,charId:string){
  let characterToLoad = this.db.object('users/'+uid+'/characters/'+charId)

    return characterToLoad;
  }

  createUser(user:any,userName:string){
    var userCreate = {
           providerId : user.providerId,
           displayName :userName,
           email : user.email,
           photoURL : 'https://firebasestorage.googleapis.com/v0/b/merp-64b26.appspot.com/o/diceIcon.png?alt=media&token=a7bcb3e7-0cd1-414c-a403-c192095e16fa',
           invites:null,
           characters : null
          }
    this.users.update(user.uid,userCreate);
  }

 

}
